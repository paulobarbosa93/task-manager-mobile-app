import { Component, OnInit } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Page } from 'ui/page';
import { DatePicker } from 'ui/date-picker';
import { TimePicker } from 'ui/time-picker';

@Component({
  moduleId: module.id,
  templateUrl: './datetime-picker-modal.component.html'
})

export class DateTimePickerModalComponent implements OnInit {
  public preSelectedDateTime: Date;
  public datePicker: DatePicker;
  public timePicker: TimePicker;

  public constructor(private modalParams: ModalDialogParams, private page: Page){
    if(this.modalParams.context && this.modalParams.context.preSelectedDateTime) {
      this.preSelectedDateTime = this.modalParams.context.preSelectedDateTime;
    } else {
      this.preSelectedDateTime = new Date();
    }
  }

  public ngOnInit(){
    this.setDatePicker();
    this.setTimePicker();
  }

  public setDatePicker(){
    this.datePicker = <DatePicker>this.page.getViewById<DatePicker>('datePicker');
    this.datePicker.height = 170;
    this.datePicker.year = this.preSelectedDateTime.getFullYear();
    this.datePicker.month = this.preSelectedDateTime.getMonth() + 1;
    this.datePicker.day = this.preSelectedDateTime.getDate();
  }

  public setTimePicker(){
    this.timePicker = <TimePicker>this.page.getViewById<TimePicker>('timePicker');
    this.timePicker.height = 170;
    this.timePicker.hour = this.preSelectedDateTime.getHours();
    this.timePicker.minute = this.preSelectedDateTime.getMinutes();
  }
}
