import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OnlineDecoderClient as _online_decoder_OnlineDecoderClient, OnlineDecoderDefinition as _online_decoder_OnlineDecoderDefinition } from './online_decoder/OnlineDecoder';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  online_decoder: {
    DecoderConfig: MessageTypeDefinition
    DecoderRequest: MessageTypeDefinition
    DecoderResponse: MessageTypeDefinition
    OnlineDecoder: SubtypeConstructor<typeof grpc.Client, _online_decoder_OnlineDecoderClient> & { service: _online_decoder_OnlineDecoderDefinition }
    SpeechRecognitionAlternative: MessageTypeDefinition
    StreamingRecognitionResult: MessageTypeDefinition
    WordInfo: MessageTypeDefinition
  }
}

