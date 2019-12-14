import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as Inputmask from "inputmask";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements  AfterViewInit  {
  name = 'Angular Date Mask';

  value: Date;
  @ViewChild('myCalendar', {static: true}) calendar;

  ngAfterViewInit(){
    var input = this.calendar.inputfieldViewChild.nativeElement;

    Inputmask.default({ 
      alias: "datetime", 
      inputFormat: "dd/mm/yyyy", 
      jitMasking: true}).mask(input);
  }
}
