// Original file: vito-stt-client.proto


// Original file: vito-stt-client.proto

export const _online_decoder_DecoderConfig_AudioEncoding = {
  ENCODING_UNSPECIFIED: 0,
  LINEAR16: 1,
  WAV: 2,
  FLAC: 3,
  MULAW: 4,
  ALAW: 5,
  AMR: 6,
  AMR_WB: 7,
  OGG_OPUS: 8,
  OPUS: 9,
} as const;

export type _online_decoder_DecoderConfig_AudioEncoding =
  | 'ENCODING_UNSPECIFIED'
  | 0
  | 'LINEAR16'
  | 1
  | 'WAV'
  | 2
  | 'FLAC'
  | 3
  | 'MULAW'
  | 4
  | 'ALAW'
  | 5
  | 'AMR'
  | 6
  | 'AMR_WB'
  | 7
  | 'OGG_OPUS'
  | 8
  | 'OPUS'
  | 9

export type _online_decoder_DecoderConfig_AudioEncoding__Output = typeof _online_decoder_DecoderConfig_AudioEncoding[keyof typeof _online_decoder_DecoderConfig_AudioEncoding]

export interface DecoderConfig {
  'sampleRate'?: (number);
  'encoding'?: (_online_decoder_DecoderConfig_AudioEncoding);
  'modelName'?: (string);
  'useItn'?: (boolean);
  'useDisfluencyFilter'?: (boolean);
  'useProfanityFilter'?: (boolean);
  'keywords'?: (string)[];
  '_modelName'?: "modelName";
  '_useItn'?: "useItn";
  '_useDisfluencyFilter'?: "useDisfluencyFilter";
  '_useProfanityFilter'?: "useProfanityFilter";
}

export interface DecoderConfig__Output {
  'sampleRate'?: (number);
  'encoding'?: (_online_decoder_DecoderConfig_AudioEncoding__Output);
  'modelName'?: (string);
  'useItn'?: (boolean);
  'useDisfluencyFilter'?: (boolean);
  'useProfanityFilter'?: (boolean);
  'keywords'?: (string)[];
}
