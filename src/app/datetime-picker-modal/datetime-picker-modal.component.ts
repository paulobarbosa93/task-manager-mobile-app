import { Component, OnInit } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Page } from 'ui/page';
import { DatePicker } from 'tns-core-modules/ui/date-picker';
import { TimePicker } from 'tns-core-modules/ui/time-picker';

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

  public ngOnInit(){ }

  public onDatePickerLoaded(args) {
    this.setDatePicker(args);
  }

  public onTimePickerLoaded(args) {
    this.setTimePicker(args);
  }

  public setDatePicker(args){
    this.datePicker = <DatePicker>args.object;
    this.datePicker.height = 150;
    this.datePicker.year = this.preSelectedDateTime.getFullYear();
    this.datePicker.month = this.preSelectedDateTime.getMonth() + 1;
    this.datePicker.day = this.preSelectedDateTime.getDate();
  }

  public setTimePicker(args){
    this.timePicker = <TimePicker>args.object;
    this.timePicker.height = 150;
    this.timePicker.hour = this.preSelectedDateTime.getHours();
    this.timePicker.minute = this.preSelectedDateTime.getMinutes();
  }

  public sendNewDateTime() {
    let newDateTime: Date = new Date(
      this.datePicker.year,
      this.datePicker.month - 1,
      this.datePicker.day,
      this.timePicker.hour,
      this.timePicker.minute
    )

    this.modalParams.closeCallback(newDateTime);
  }
}
