// drag-drop.service.ts
import { Injectable } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  private layoutDropList!: CdkDropList;

  setLayoutDropList(dropList: CdkDropList) {
    this.layoutDropList = dropList;
  }

  getLayoutDropList(): CdkDropList {
    return this.layoutDropList;
  }
}
