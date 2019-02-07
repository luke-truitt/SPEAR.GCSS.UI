import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatFormFieldModule } from '@angular/material/';
import { AppComponent } from './app.component';
import { EquipmentFormComponent } from './forms/equipment-form/equipment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EquipmentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule, MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
