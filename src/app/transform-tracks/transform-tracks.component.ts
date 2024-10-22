import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Constants } from '../Constants';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-transform-tracks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './transform-tracks.component.html',
  styleUrl: './transform-tracks.component.css'
})
export class TransformTracksComponent {
  jsonToConvert: string = '';
  nonConvertedArray: any[] = [];
  convertedJson: any;
  convertedJsonView: string = '';
  spotifyToken: string = '';

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  routeToActivityTransform() {
    this.router.navigate(['']);
  }

  submitToken() {
    Constants.spotifyToken = this.spotifyToken;
  }

  convertJson() {
    this.nonConvertedArray = JSON.parse(this.jsonToConvert)
    if (this.spotifyToken.length > 0 && Constants.spotifyToken) {
      //debugger;
      this.nonConvertedArray.forEach((recentlyPlayed: any) => {
        this.spotifyService.getTrack(recentlyPlayed.track.id).subscribe((trackRes) => {
          // console.log('track', trackRes);
          recentlyPlayed.track = trackRes;

          this.spotifyService.getAudioFeatures(recentlyPlayed.track.id).subscribe((afRes) => {
            // console.log('audioFeatures', afRes);
            recentlyPlayed.track.audio_features = afRes;
          });


        });
      });
      console.log(this.nonConvertedArray);
      this.convertedJson = this.nonConvertedArray;
      this.convertedJsonView = JSON.stringify(this.nonConvertedArray);
    }
  }


  downloadJson() {
    const dataStr = JSON.stringify(this.convertedJson, null, 2); // Convert the JSON object to string with formatting
    const blob = new Blob([dataStr], { type: 'application/json' }); // Create a Blob object with the JSON data

    // Create a URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted-recently-played.json`;  // File name for the downloaded file
    document.body.appendChild(a);  // Append the link to the document
    a.click();  // Programmatically click the link to trigger the download
    document.body.removeChild(a);  // Remove the link from the document

    this.convertedJson = null;
  }

}
