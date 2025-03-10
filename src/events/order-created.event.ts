import { OrderStatus } from "../enums";
import { ChannelEvent } from "./channel-event.interface";
export interface OrderCreatedEvent extends ChannelEvent {
  payload: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
    version: number;
  };
}
