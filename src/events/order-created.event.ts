import { ChannelEvent } from './channel-event.interface';
export interface OrderCreatedEvent extends ChannelEvent {
    payload: {
      id: string;
      userId?: string;
    };
  }
  