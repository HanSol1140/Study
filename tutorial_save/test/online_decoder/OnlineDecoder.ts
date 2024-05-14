// Original file: vito-stt-client.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DecoderRequest as _online_decoder_DecoderRequest, DecoderRequest__Output as _online_decoder_DecoderRequest__Output } from '../online_decoder/DecoderRequest';
import type { DecoderResponse as _online_decoder_DecoderResponse, DecoderResponse__Output as _online_decoder_DecoderResponse__Output } from '../online_decoder/DecoderResponse';

export interface OnlineDecoderClient extends grpc.Client {
  Decode(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_online_decoder_DecoderRequest, _online_decoder_DecoderResponse__Output>;
  Decode(options?: grpc.CallOptions): grpc.ClientDuplexStream<_online_decoder_DecoderRequest, _online_decoder_DecoderResponse__Output>;
  decode(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_online_decoder_DecoderRequest, _online_decoder_DecoderResponse__Output>;
  decode(options?: grpc.CallOptions): grpc.ClientDuplexStream<_online_decoder_DecoderRequest, _online_decoder_DecoderResponse__Output>;
  
}

export interface OnlineDecoderHandlers extends grpc.UntypedServiceImplementation {
  Decode: grpc.handleBidiStreamingCall<_online_decoder_DecoderRequest__Output, _online_decoder_DecoderResponse>;
  
}

export interface OnlineDecoderDefinition extends grpc.ServiceDefinition {
  Decode: MethodDefinition<_online_decoder_DecoderRequest, _online_decoder_DecoderResponse, _online_decoder_DecoderRequest__Output, _online_decoder_DecoderResponse__Output>
}
