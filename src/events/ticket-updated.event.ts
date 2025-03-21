import { ChannelEvent } from './channel-event.interface';
export interface TicketUpdatedEvent extends ChannelEvent {
    payload: {
      id: string;
      title: string;
      price: number;
      userId: string;
      version: number;
      orderId?: string;
    };
  }
  