import { Component } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css'],
})
export class EditItemsComponent {
  selectedElement$ = this.formService.selectedElement$;
  editForm: FormGroup;

  constructor(private formService: FormService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      label: [''],
      placeholder: [''],
    });

    this.selectedElement$.subscribe((element) => {
      if (element) {
        this.editForm.patchValue(element);
      }
    });
  }

  save() {
    this.formService.updateElement(this.editForm.value);
  }
}
