import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constants } from "../Constants";

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    // headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        private http: HttpClient
    ) { }


    getTrack(trackId:string): Observable<any> {
        return this.http.get<any>(`${Constants.trackUrl}${trackId}`, { headers: this.headers.set('Authorization', `Bearer ${Constants.spotifyToken}`) });
    }

    getAudioFeatures(trackId:string): Observable<any> {
        return this.http.get<any>(`${Constants.audioFeaturesUrl}${trackId}`, { headers: this.headers.set('Authorization', `Bearer ${Constants.spotifyToken}`) });
    }

}