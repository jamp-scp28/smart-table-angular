import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './modules/admin/pages/admin/admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatCardTitle, MatCardContent } from '@angular/material/card';
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
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule
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
    BrowserAnimationsModule,
    MatNativeDateModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    ...materialModules,
    AppRoutingModule
  ],
  providers: [usersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
