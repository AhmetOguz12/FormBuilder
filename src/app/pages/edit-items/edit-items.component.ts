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
  newOption: string = ''; // Yeni seçenek için değişken

  constructor(private formService: FormService) {
    this.selectedElement$ = this.formService.selectedElement$; // Get the selected element to edit
  }

  updateElement() {
    this.formService.updateElement(this.selectedElement$);
  }

  updateOptions(selectedElement: any) {
    if (selectedElement.options) {
      selectedElement.options = selectedElement.options
        .split(',')
        .map((option: string) => option.trim());
    }
  }

  addOption(selectedElement: any) {
    if (this.newOption.trim()) {
      // Eğer yeni metin boş değilse, mevcut seçeneklere ekle
      selectedElement.options.push(this.newOption.trim());
      this.newOption = ''; // Girdi alanını temizle
    }
  }
}
