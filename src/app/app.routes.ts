import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransformTracksComponent } from './transform-tracks/transform-tracks.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'transform-tracks',
        component: TransformTracksComponent
    },
];
