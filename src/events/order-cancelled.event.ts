import { ChannelEvent } from './channel-event.interface';
export interface OrderCancelledEvent extends ChannelEvent {
    payload: {
      id: string;
      userId: string;
      ticket: {
        id: string;
      };
      version: number;
    };
  }
  