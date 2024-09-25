import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() label!: string;
  @Input() options!: string[]; // Çoklu seçenekler için değişken
  @Input() value!: string; // Seçilen değer
}
