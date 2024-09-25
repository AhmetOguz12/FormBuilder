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
  newOption: string = ''; // Yeni radiobutton seçeneği

  constructor(private formService: FormService) {
    this.selectedElement$ = this.formService.selectedElement$;
  }

  updateElement() {
    this.formService.updateElement(this.selectedElement$);
  }

  addOption(selectedElement: any) {
    if (this.newOption.trim()) {
      if (!selectedElement.options) {
        selectedElement.options = [];
      }
      selectedElement.options.push(this.newOption.trim());
      this.newOption = '';
    }
  }

  removeOption(selectedElement: any, option: string) {
    selectedElement.options = selectedElement.options.filter(
      (opt: string) => opt !== option
    );
  }
}
