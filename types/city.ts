export interface Country {
  countryCode: string;
  countryName: string;
}

export interface City {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  timezone: string | null;
  latitude: number;
  longitude: number;
}

export interface CityFilterResponse {
  data: City[];
  next?: string;
}
