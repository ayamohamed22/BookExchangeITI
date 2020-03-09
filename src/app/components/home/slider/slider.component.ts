import {
  SliderService,
  SliderData
} from "./../../../services/home/slider.service";
import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    ($(".slide__activation") as any).owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      autoplayTimeout: 1000,
      items: 1,
      navText: [
        '<i class="zmdi zmdi-chevron-left"></i>',
        '<i class="zmdi zmdi-chevron-right"></i>'
      ],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        1920: {
          items: 1
        }
      }
    });
  }
  sliderDatas: SliderData[];
  currentSliderIndex = 0;
  currentSliderData: SliderData;
  constructor(private service: SliderService) {}

  ngOnInit() {
    this.sliderDatas = this.service.getAllSlidersData();
    this.currentSliderData = this.sliderDatas[0];
  }
  nextClick(divBackground) {
    console.log(divBackground.style);
    this.currentSliderIndex++;
    if (this.currentSliderIndex >= this.sliderDatas.length) {
      this.currentSliderIndex = 0;
    }
    this.getCurrentSliderData();
    divBackground.style.backgroundImage = `url(${this.currentSliderData.backGroundUrl})`;
  }
  prevClick(divBackground) {
    this.currentSliderIndex--;
    if (this.currentSliderIndex < 0) {
      this.currentSliderIndex = this.sliderDatas.length - 1;
    }
    this.getCurrentSliderData();
    divBackground.style.backgroundImage = `url(${this.currentSliderData.backGroundUrl})`;
  }
  getCurrentSliderData() {
    this.currentSliderData = this.sliderDatas[this.currentSliderIndex];
  }
}
