import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { ItemLayoutComponent } from '../item-layout/item-layout.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(ItemLayoutComponent) itemLayoutComponent!: ItemLayoutComponent;
  layoutDropList!: CdkDropList; // Holds the drop list once initialized

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.itemLayoutComponent && this.itemLayoutComponent.dropList) {
      this.layoutDropList = this.itemLayoutComponent.dropList;
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }
}
