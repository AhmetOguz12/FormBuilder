import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css'],
})
export class EditItemsComponent {
  selectedElement$: Observable<any>;

  constructor(private formService: FormService) {
    this.selectedElement$ = this.formService.selectedElement$; // Get the selected element to edit
  }

  updateElement() {
    // Call the update method in the service to apply changes to the selected element
    this.formService.updateElement(this.selectedElement$);
  }
}
