import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ImageListComponent } from './image-list/image-list.component';
import { CdnjsComponent } from "./cdnjs/cdnjs.component";
import { DataValidationComponent } from "./data-validation/data-validation.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const appRoutes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'about-us', component:AboutUsComponent},
    { path: 'image-search', component:ImageListComponent },
    { path: 'cdnjs', component:CdnjsComponent },
    { path: 'data-validation', component:DataValidationComponent },
    { path: '**', component:HomeComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
})

export class AppRoutingModule {  }