import { Component } from '@angular/core';
import { Equipment } from 'src/app/equipment';


@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class HeroFormComponent {

  locations = ['One', 'Two',
            'Three', 'Four'];

  model = new Equipment(18, true, this.locations[0]);
  submitted = false;

  // TODO: POST
  onSubmit() { this.submitted = true;
  console.log('Submitted'); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
