export interface Track {
    id: any
    providerTrackId: string
    trackData: TrackJsonObject
}


export interface TrackJsonObject {
    album: Album
    artists: Artist[]
    duration_ms: number
    id: string
    name: string
    popularity: number
    type: string
    uri: string
    audio_features: any
}



export interface Album {
    type: string
    album_type: string
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    uri: string
    artists: Artist[]
    external_urls: ExternalUrls
    total_tracks: number
  }
  
  export interface Image {
    height: number
    url: string
    width: number
  }
  
  export interface Artist {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls {
    spotify: string
  }

  
  
  