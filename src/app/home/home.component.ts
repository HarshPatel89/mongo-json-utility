import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { Activity, ActivityJsonObject } from '../models/activity-models';
import { v4 as uuidv4 } from 'uuid';
import { Track, TrackJsonObject } from '../models/track-models';
import { Constants } from '../Constants';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    InputTextModule,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedEntity: string = '';
  entities: any[] = [
    {
      id: 1,
      name: 'Activity'
    },
    {
      id: 3,
      name: 'Track'
    }
  ];
  jsonToConvert: any;
  convertedJson: any;
  userId: any;
  convertedJsonView: string = '';




  constructor(

  ) { }

  ngOnInit(): void {

  }

  convertJson() {
    //console.log(this.selectedEntity);
    switch (this.selectedEntity) {
      case 'Activity':
        this.convertToActivity();
        break;
      case 'Track':
        this.convertToTrack();
        break;
      default:
        break;
    }
  }

  convertToActivity() {
    try {
      // Parse the JSON input from the text area
      const jsonData: ActivityJsonObject = JSON.parse(this.jsonToConvert);
      jsonData.sport_type = jsonData.type;
      jsonData.duration_mins = Constants.formatDuration(jsonData.elapsed_time * 1000);
      jsonData.end_date = Constants.getActivityEndTime(jsonData.start_date, jsonData.elapsed_time);
      jsonData.distance_km = (jsonData.distance/1000);

      // Generate a new id (using a random number for example)
      const newId = uuidv4();
      console.log("new uuid :", newId)

      // Create the Activity object
      const activity: Activity = {
        _id: newId,                       // Generated ID
        UserId: this.userId,              // User ID from input
        ProviderActivityId: jsonData.id,  // Example of setting providerActivityId
        JsonData: jsonData                // The parsed JSON data
      };

      console.log(activity);

      this.convertedJson = activity;
      this.convertedJsonView = JSON.stringify(this.convertedJson);
    } catch (error) {
      console.error('Invalid JSON input', error);
    }
  }


  convertToTrack() {
    try {
      // Parse the JSON input from the text area
      const trackData: TrackJsonObject = JSON.parse(this.jsonToConvert);
      trackData.audio_features = this.jsonToConvert.Features;
      //debugger;
      //  this.jsonToConvert =JSON.parse(this.jsonToConvert)
      //  const trackData: TrackJsonObject = Constants.typeCastTrackJson(this.jsonToConvert);

      // Generate a new GUID for the track ID
      const newId = uuidv4();

      // Create the Track object
      const track: Track = {
        id: newId,                       // Generated GUID
        providerTrackId: trackData.id,    // Use the ID from trackData
        trackData: trackData              // The parsed JSON data
      };

      console.log(track);
      this.convertedJson = track;
      this.convertedJsonView = JSON.stringify(this.convertedJson);


    } catch (error) {
      console.error('Invalid JSON input', error);
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
    a.download = `converted-${this.selectedEntity}.json`;  // File name for the downloaded file
    document.body.appendChild(a);  // Append the link to the document
    a.click();  // Programmatically click the link to trigger the download
    document.body.removeChild(a);  // Remove the link from the document

    this.convertedJson = null;
  }

}
