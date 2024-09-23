import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private elementsSubject = new BehaviorSubject<any[]>([]);
  elements$ = this.elementsSubject.asObservable();

  private selectedElementSubject = new BehaviorSubject<any>(null);
  selectedElement$ = this.selectedElementSubject.asObservable();

  addElement(element: any) {
    const currentElements = this.elementsSubject.getValue();
    currentElements.push(element);
    this.elementsSubject.next(currentElements);
  }

  selectElement(element: any) {
    this.selectedElementSubject.next(element);
  }

  updateElement() {
    const currentElements = this.elementsSubject.getValue();
    const selectedElement = this.selectedElementSubject.getValue();
    const index = currentElements.findIndex((el) => el === selectedElement);

    if (index !== -1) {
      currentElements[index] = { ...selectedElement };
      this.elementsSubject.next(currentElements);
    }
  }
}
