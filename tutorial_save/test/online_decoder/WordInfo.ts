// Original file: vito-stt-client.proto

import type { Long } from '@grpc/proto-loader';

export interface WordInfo {
  'startAt'?: (number | string | Long);
  'duration'?: (number | string | Long);
  'text'?: (string);
  'confidence'?: (number | string);
  'speakerTag'?: (number);
}

export interface WordInfo__Output {
  'startAt'?: (Long);
  'duration'?: (Long);
  'text'?: (string);
  'confidence'?: (number);
  'speakerTag'?: (number);
}
