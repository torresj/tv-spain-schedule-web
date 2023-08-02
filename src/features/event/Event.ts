import { EventType } from "@testing-library/react";
import Channel from "../channel/Channel";

export default interface Event {
  eventType: EventType;
  start: Date;
  end: Date;
  duration: number;
  progress: number;
  name: String;
  synopsis?: String;
  classification?: String;
  director?: String;
  interpreters?: String;
  rate?: number;
  imageUrl?: String;
  chapterName?: String;
  channel: Channel;
}
