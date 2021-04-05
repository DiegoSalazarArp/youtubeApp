export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Videos;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Videos {
    publishedAt:            Date;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UCcvbtCSO8ZCf91YZf3P5Tdg = "UCcvbtCsO8ZCf91YZf3P5Tdg",
}

export enum ChannelTitle {
    DiegoEnzoSalazarARP = "Diego Enzo Salazar Arp",
}

export enum PlaylistID {
    UUcvbtCSO8ZCf91YZf3P5Tdg = "UUcvbtCsO8ZCf91YZf3P5Tdg",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
