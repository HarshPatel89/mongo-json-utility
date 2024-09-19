import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,



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
      id: 2,
      name: 'ActivityDetail'
    },
    {
      id: 3,
      name: 'Track'
    },
    // {
    //   id: 4,
    //   name:''
    // },
  ];
  jsonToConvert: any;
  convertedJson: any ;









  constructor(

  ) { }

  ngOnInit(): void {

  }

  convertJson(){


  }


  
}
