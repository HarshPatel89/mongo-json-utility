

export interface Activity {
    _id:any
    UserId:any
    ProviderActivityId: number
    JsonData: ActivityJsonObject
}



export interface ActivityJsonObject {
    id:number
    name: any
    distance: any
    moving_time: any
    elapsed_time: any
    total_elevation_gain: any
    type: any
    sport_type: any
    start_date: any
    start_date_local: any
    timezone: any
    utc_offset: any
    average_speed: any
    max_speed: any
    average_heartrate: any
    max_heartrate: any
    elev_high: any
    elev_low: any
    upload_id: any
    external_id: any
    suffer_score: any
    calories: any
    end_date: any
    duration_mins: any
    distance_km: any
}

// export interface ActivityDetailJsonObject {
//     id:number
//     name: any
//     distance: any
//     moving_time: any
//     elapsed_time: any
//     total_elevation_gain: any
//     type: any
//     sport_type: any
//     start_date: any
//     start_date_local: any
//     timezone: any
//     utc_offset: any
//     average_speed: any
//     max_speed: any
//     average_heartrate: any
//     max_heartrate: any
//     elev_high: any
//     elev_low: any
//     upload_id: any
//     external_id: any
//     suffer_score: any
//     calories: any
//     end_date: any
//     audio: PairedTrackJsonObject[]
//     duration_mins: any
//     distance_km: any
// }

// export interface PostActivityDetailRequest {
//     providerActivityId: number
//     jsonData: string
// }