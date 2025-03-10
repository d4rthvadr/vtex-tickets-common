// Interface representing a generic event in a channel
export interface ChannelEvent <T = object> {
  // The payload of the event, which contains event-specific data
  payload: T;
}

