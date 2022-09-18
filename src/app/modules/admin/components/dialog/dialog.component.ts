import { usersDataService } from './../../services/data.service';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { adminInterfaces } from '../../interfaces/admin.interfaces';
import * as moment from 'moment';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: adminInterfaces.DialogConfig, private usersDb: usersDataService) {
    data.acceptButtonTitle ?? 'Yes';
    data.title ?? 'Unnamed Dialog';
  }

  ngOnInit() {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    username: new FormControl('', Validators.required),
    startDate: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      username: '',
      email: '',
      startDate: '',
    });
  }

  onClear() {
  }

  onSubmit() {
      let newUser: adminInterfaces.User = this.form.value
      newUser.startDate = moment(newUser.startDate).format('DD/MM/YYYY')
      console.log('newuser:', newUser)
      const response = this.usersDb.addUser(newUser)
      console.log(response)
  }

  onClose() {
  }
}