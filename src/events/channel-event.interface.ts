// Interface representing a generic event in a channel
export interface ChannelEvent <T = object> {
  // The version to enforce application level ordering before processing
  version: number;
  // The payload of the event, which contains event-specific data
  payload: T;
}

