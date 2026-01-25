import { City } from "./city";
import { User } from "./user";
import { Document } from "./document";

export interface EventResponse {
  id: string;
  name: string;
  description: string;
  coverImage: Document | null;
  city: City;
  address: string;
  latitude: number;
  longitude: number;
  startDate: string;
  endDate: string;
  owner: User;
  participantsCount: number;
  going: boolean;
  type: "PUBLIC" | "PRIVATE";
  groups: any[];
  familyTrees: any[];
  archived: boolean;
  medias: Document[];
  decisions: any[];
}

export interface PageResponse<T> {
  data: T[];
  next?: string;
  hasNext: boolean;
  totalPage: number;
  total: number;
}
