import { Component } from '@angular/core';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  constructor(private formService: FormService) {}

  addElement(type: string) {
    const element = { type, label: `New ${type}` };
    this.formService.addElement(element);
  }
}
