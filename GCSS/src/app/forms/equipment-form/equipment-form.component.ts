import { Component } from '@angular/core';
import { Equipment } from 'src/app/equipment';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent {

  locations = [0, 1, 2, 3];
  public form: Equipment = new Equipment();
  submitted = false;

  constructor(private http: HttpClient) {
  }

  onSubmit() { this.submitted = true;
    this.http.post<any>('http://localhost:5000/equipment', this.form.value)
            .toPromise();
  console.log('Submitted'); }
}
