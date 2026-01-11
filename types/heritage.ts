// Heritage request interface for creating a new heritage site
import { City, Country } from "./city";
import { User } from "./user";
import { Document } from "./document";
export interface HeritageRequest {
  title: string;
  description: string;
  siteType?: string;
  city?: string;
  mediaIds: string[];
  latitude: number;
  longitude: number;
  establishedAt?: string;
}

// Heritage update request interface
export interface HeritageUpdateRequest {
  title?: string;
  description?: string;
  siteType?: string;
  city?: string;
  mediaIds?: string[];
  latitude?: number;
  longitude?: number;
  establishedAt?: string;
}

// Heritage response interface
export interface HeritageResponse {
  createdAt: string | number | Date;
  id: string;
  title: string;
  description: string;
  siteType: string;
  latitude: number;
  longitude: number;
  establishedAt?: string;
  medias: Document[];
  country: Country;
  city: City;
  owner: User;
  likes: any[] | null;
  comments: Comment[] | null;
  views: number;
}

// Pagination response interface
export interface PageResponse<T> {
  data: T[];
  next?: string;
  prev?: string;
  total: number;
}

export interface HeritagesDetailsResponse {
  data: HeritageResponse[];
  next: string | null;
  hasNext: boolean;
}
