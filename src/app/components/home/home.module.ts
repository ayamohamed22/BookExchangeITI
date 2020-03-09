import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from "./../shared/shared.module";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, SliderComponent,BookListComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [HomeComponent, SliderComponent,BookListComponent]
})
export class HomeModule {}
