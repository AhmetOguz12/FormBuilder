import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() options!: any[]; // Seçenekler için dizi
  @Input() value!: string;
}
