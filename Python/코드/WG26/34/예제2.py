import RPi.GPIO as GPIO

# Pin configuration
D0_PIN = 14  # GPIO14 / Pin 8
D1_PIN = 15  # GPIO15 / Pin 10

# Variables to store the received data
data_bits = []
facility_code = 0
card_code = 0

def data_received(channel):
    global data_bits, facility_code, card_code

    # Read data from the D0 and D1 pins
    d0_bit = GPIO.input(D0_PIN)
    d1_bit = GPIO.input(D1_PIN)

    # Add the received bit to the data bits list
    data_bits.append((d0_bit, d1_bit))

    # Check if we have received enough bits for facility code and card code
    if len(data_bits) == 26:
        # Extract facility code
        facility_code_bits = [d0 for d0, d1 in data_bits[:8]]
        facility_code = int(''.join(str(bit) for bit in facility_code_bits), 2)

        # Extract card code
        card_code_bits = [d1 for d0, d1 in data_bits[8:24]]
        card_code = int(''.join(str(bit) for bit in card_code_bits), 2)

        # Reset data bits for the next input
        data_bits = []

# Configure GPIO pins
GPIO.setmode(GPIO.BCM)
GPIO.setup(D0_PIN, GPIO.IN)
GPIO.setup(D1_PIN, GPIO.IN)

# Add event detection for falling edge on both D0 and D1 pins
GPIO.add_event_detect(D0_PIN, GPIO.FALLING, callback=data_received)
GPIO.add_event_detect(D1_PIN, GPIO.FALLING, callback=data_received)

try:
    while True:
        # Wait for user input
        input("Waiting for input... (Press Enter to exit)")

except KeyboardInterrupt:
    # Cleanup GPIO settings on Ctrl+C
    GPIO.cleanup()
