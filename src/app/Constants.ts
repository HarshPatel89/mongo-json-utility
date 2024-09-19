import { ActivityJsonObject } from "./models/activity-models";
import { TrackJsonObject } from "./models/track-models";

export class Constants {

    public static typeCastActivityJson(activity: any): ActivityJsonObject {
        var activityJson: ActivityJsonObject = {
            id: activity.id,
            name: activity.name,
            distance: activity.distance,
            moving_time: activity.moving_time,
            elapsed_time: activity.elapsed_time,
            total_elevation_gain: activity.total_elevation_gain,
            type: activity.type,
            sport_type: activity.sport_type,
            start_date: activity.start_date,
            start_date_local: activity.start_date_local,
            timezone: activity.timezone,
            utc_offset: activity.utc_offset,
            average_speed: activity.average_speed,
            max_speed: activity.max_speed,
            average_heartrate: activity.average_heartrate,
            max_heartrate: activity.max_heartrate,
            elev_high: activity.elev_high,
            elev_low: activity.elev_low,
            upload_id: activity.upload_id,
            external_id: activity.external_id,
            suffer_score: activity.suffer_score,
            calories: activity.calories,
            end_date: activity.end_date,
            duration_mins: activity.duration_mins,
            distance_km: activity.distance_km
        };
        return activityJson;
    }



    public static typeCastTrackJson(track: any): TrackJsonObject {
        var trackJson: TrackJsonObject = {
            album: track.album,
            artists: track.artists,
            duration_ms: track.duration_ms,
            id: track.id,
            name: track.name,
            popularity: track.popularity,
            type: track.type,
            uri: track.uri,
            audio_features: track.audio_features,
        };
        return trackJson
    }



    //To calculate the end time of the activity
    public static getActivityEndTime(startDate: string, elapsed_time: number): string {
        // Convert startDate to a Date object
        const startDateObj = new Date(startDate);
        // Add the elapsed time (in seconds) to the startDate
        const endDateObj = new Date(startDateObj.getTime() + elapsed_time * 1000);
        // Convert the resulting Date object back to an ISO string
        return endDateObj.toISOString();
    }



}