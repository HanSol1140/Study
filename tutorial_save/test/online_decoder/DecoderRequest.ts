// Original file: vito-stt-client.proto

import type { DecoderConfig as _online_decoder_DecoderConfig, DecoderConfig__Output as _online_decoder_DecoderConfig__Output } from '../online_decoder/DecoderConfig';

export interface DecoderRequest {
  'streamingConfig'?: (_online_decoder_DecoderConfig | null);
  'audioContent'?: (Buffer | Uint8Array | string);
  'streamingRequest'?: "streamingConfig"|"audioContent";
}

export interface DecoderRequest__Output {
  'streamingConfig'?: (_online_decoder_DecoderConfig__Output);
  'audioContent'?: (Buffer);
}
