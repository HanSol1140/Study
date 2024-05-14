// Original file: vito-stt-client.proto

import type { WordInfo as _online_decoder_WordInfo, WordInfo__Output as _online_decoder_WordInfo__Output } from '../online_decoder/WordInfo';

export interface SpeechRecognitionAlternative {
  'text'?: (string);
  'confidence'?: (number | string);
  'words'?: (_online_decoder_WordInfo)[];
}

export interface SpeechRecognitionAlternative__Output {
  'text'?: (string);
  'confidence'?: (number);
  'words'?: (_online_decoder_WordInfo__Output)[];
}
