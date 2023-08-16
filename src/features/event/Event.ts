import { EventType } from "@testing-library/react";
import Channel from "../channel/Channel";

export default interface Event {
  eventType: EventType;
  start: Date;
  end: Date;
  duration: number;
  progress: number;
  name: string;
  synopsis?: string;
  classification?: string;
  director?: string;
  interpreters?: string;
  rate?: number;
  imageUrl?: string;
  chapterName?: string;
  channel: Channel;
}
