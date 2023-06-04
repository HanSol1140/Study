def counter_number_state(n_list):
    state = {
        'positive' : 0,
        'negative' : 0,
        'zero' : 0,
    }
    for n in n_list:
        if n > 0:
            state['positive'] += 1
        elif n < 0:
            state['negative'] += 1
        else:
            state['zero'] += 1
    return state

# main
n_list = [-3, -2, -1, 0, 1, 2, 3, 4] # range(-3, 5)
counter = counter_number_state(n_list)
print(counter) # {'positive': 4, 'negative': 3, 'zero': 1}
print(counter['positive']) # 4
print(counter['negative']) # 3
print(counter['zero']) # 1