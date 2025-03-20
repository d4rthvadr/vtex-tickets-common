import { ChannelEvent } from "./channel-event.interface";
export interface OrderExpiredEvent extends ChannelEvent {
  payload: {
    id: string;
  };
}
