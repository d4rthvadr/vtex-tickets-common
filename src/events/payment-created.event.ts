import { ChannelEvent } from "./channel-event.interface";
export interface PaymentCreatedEvent extends ChannelEvent {
  payload: {
    id: string;
    orderId: string;
    paymentRefId: string;
    paymentProvider: string;
  };
}
