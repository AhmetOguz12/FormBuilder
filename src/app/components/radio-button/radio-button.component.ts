import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() label!: string;
  @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3']; // Varsayılan seçenekler
  @Input() value: string = ''; // Seçilen değer başlangıçta boş olabilir

  constructor() {
    console.log('Options: ', this.options); // Seçeneklerin doğru yüklendiğini görmek için
  }
}
