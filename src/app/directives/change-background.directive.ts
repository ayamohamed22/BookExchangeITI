import { element } from "protractor";
import { ElementRef, Input, OnInit } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appChangeBackground]"
})
export class ChangeBackgroundDirective implements OnInit {
  @Input("appChangeBackground") srcImg;

  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundImage = `url(${this.srcImg})`;
  }
}
