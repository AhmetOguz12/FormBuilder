import { Component } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css'],
})
export class EditItemsComponent {
  selectedElement$: Observable<any>;

  constructor(private formService: FormService) {
    this.selectedElement$ = this.formService.selectedElement$;
  }

  updateElement(updatedLabel: string, updatedValue: string) {
    const updatedElement = { label: updatedLabel, value: updatedValue };
    this.formService.updateElement(updatedElement); // Pass the updated element to the service
  }
}
