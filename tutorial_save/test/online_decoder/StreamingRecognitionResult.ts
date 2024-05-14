// Original file: vito-stt-client.proto

import type { SpeechRecognitionAlternative as _online_decoder_SpeechRecognitionAlternative, SpeechRecognitionAlternative__Output as _online_decoder_SpeechRecognitionAlternative__Output } from '../online_decoder/SpeechRecognitionAlternative';

export interface StreamingRecognitionResult {
  'alternatives'?: (_online_decoder_SpeechRecognitionAlternative)[];
  'isFinal'?: (boolean);
  'stability'?: (number | string);
  'duration'?: (number);
  'startAt'?: (number);
}

export interface StreamingRecognitionResult__Output {
  'alternatives'?: (_online_decoder_SpeechRecognitionAlternative__Output)[];
  'isFinal'?: (boolean);
  'stability'?: (number);
  'duration'?: (number);
  'startAt'?: (number);
}
