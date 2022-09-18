import { DialogComponent } from './../dialog/dialog.component';
import { usersDataService } from './../../services/data.service';
import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MatDialog } from '@angular/material/dialog';
import { adminInterfaces } from '../../interfaces/admin.interfaces';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @ViewChild('usersForm') usersForm: TemplateRef<any> | undefined;
  usersData: any;
  source: LocalDataSource;
  constructor(public dialog: MatDialog, private usersDb: usersDataService) {
    this.source = new LocalDataSource([])
  }

  openUserForm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: <adminInterfaces.DialogConfig>{
        title: 'Add a New User',
        dialogContent: this.usersForm,
        acceptButtonTitle: 'ok!',
        declineButtonTitle: 'cancel!'
      }
    }).afterClosed().subscribe(()=>{
     this.refreshDatasave() 
    })
  }

  ngOnInit(): void {
    this.refreshData()
  }

  refreshData(){
    console.log('calling refresh')
    this.usersDb.getUsers().subscribe(data=>{
      console.log(data)
      this.usersData = data;
    })
  }

  refreshDatasave = ()=>{
    console.log('calling refresh')
    setTimeout(() =>{
        this.usersDb.getUsers().subscribe(data=>{
          console.log(data)
          this.usersData = data;
        })
     }, 1000);
  }

  editUser(event: any){
    console.log('Event edit: ',event)
    this.usersDb.updateUser(event.data.id,event.newData).subscribe(data=>{
      this.refreshData()
    })
  }

  deleteUser(event: any){
    console.log(event)
    this.usersDb.deleteUser(event.data.id).subscribe(data=>{
      this.refreshData()
    })
  }

  settings = {
    edit:{
     confirmSave: true
    },
    delete:{
      confirmDelete: true
    },
    actions: {
      add: false,
    },
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Name',
        filter: true
      },
      username: {
        title: 'username',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      startDate:{
        title: 'Start Date',
        filter: false
      } 
    }
  };

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }

}