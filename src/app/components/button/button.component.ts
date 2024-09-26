import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [ngStyle]="{
        'background-color': buttonColor,
        color: textColor,
        border: borderThickness + ' solid ' + borderColor,
        width: width,
        height: height
      }"
    >
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() buttonColor: string = '#ffffff'; // Varsayılan arka plan rengi
  @Input() textColor: string = '#000000'; // Varsayılan metin rengi
  @Input() borderColor: string = '#000000'; // Varsayılan sınır rengi
  @Input() borderThickness: string = '1px'; // Varsayılan sınır kalınlığı
  @Input() width: string = 'auto'; // Varsayılan genişlik (otomatik)
  @Input() height: string = 'auto'; // Varsayılan yükseklik (otomatik)
}
