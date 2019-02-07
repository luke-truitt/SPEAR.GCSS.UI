import { FormGroup, FormControl } from '@angular/forms';

export class Equipment extends FormGroup {
  public get equipmentId() { return this.get('equipmentId'); }
  public get available() { return this.get('available'); }
  public get location() { return this.get('location'); }
  constructor(  ) {
    super({
      equipmentId: new FormControl(''),
      available: new FormControl(''),
      location: new FormControl('')
    });
    }

}

