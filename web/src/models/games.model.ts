export interface GamesResponse {
  data: GamesDatum[];
  meta: Meta;
}

export interface GamesDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name:        string;
  release:     Date;
  description: Description[];
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  cover:       Cover;
  platforms:   Platforms;
}

export interface Cover {
  data: Data;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface Formats {
  thumbnail: Large;
  small?:    Large;
  large?:    Large;
  medium?:   Large;
}

export interface Large {
  name:        string;
  hash:        string;
  ext:         string;
  mime:        string;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}

export interface Description {
  type:     string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface Platforms {
  data: PlatformsDatum[];
}

export interface PlatformsDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:        string;
  supported:   boolean;
  company:     string;
  release:     Date;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
