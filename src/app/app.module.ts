import { AdminComponent } from './modules/admin/pages/admin/admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { usersDataService } from './modules/admin/services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/admin/components/footer/footer.component';
import { DialogComponent } from './modules/admin/components/dialog/dialog.component';
import { UsersTableComponent } from './modules/admin/components/users-table/users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './modules/admin/components/navbar/navbar.component';

const materialModules = [
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatGridListModule,
  MatFormFieldModule,
]


@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    DialogComponent,
    UsersTableComponent,
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ...materialModules,
    AppRoutingModule
  ],
  providers: [usersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
