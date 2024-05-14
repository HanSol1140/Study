// Original file: vito-stt-client.proto

import type { StreamingRecognitionResult as _online_decoder_StreamingRecognitionResult, StreamingRecognitionResult__Output as _online_decoder_StreamingRecognitionResult__Output } from '../online_decoder/StreamingRecognitionResult';

// Original file: vito-stt-client.proto

export const _online_decoder_DecoderResponse_SpeechEventType = {
  SPEECH_EVENT_UNSPECIFIED: 0,
  END_OF_SINGLE_UTTERANCE: 1,
  START_OF_VAD: 2,
  END_OF_VAD: 3,
} as const;

export type _online_decoder_DecoderResponse_SpeechEventType =
  | 'SPEECH_EVENT_UNSPECIFIED'
  | 0
  | 'END_OF_SINGLE_UTTERANCE'
  | 1
  | 'START_OF_VAD'
  | 2
  | 'END_OF_VAD'
  | 3

export type _online_decoder_DecoderResponse_SpeechEventType__Output = typeof _online_decoder_DecoderResponse_SpeechEventType[keyof typeof _online_decoder_DecoderResponse_SpeechEventType]

export interface DecoderResponse {
  'error'?: (boolean);
  'results'?: (_online_decoder_StreamingRecognitionResult)[];
  'speechEventType'?: (_online_decoder_DecoderResponse_SpeechEventType);
}

export interface DecoderResponse__Output {
  'error'?: (boolean);
  'results'?: (_online_decoder_StreamingRecognitionResult__Output)[];
  'speechEventType'?: (_online_decoder_DecoderResponse_SpeechEventType__Output);
}
