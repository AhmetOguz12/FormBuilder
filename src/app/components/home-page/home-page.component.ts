import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ItemLayoutComponent } from '../item-layout/item-layout.component';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(ItemLayoutComponent) itemLayoutComponent!: ItemLayoutComponent;
  layoutDropList!: CdkDropList; // Holds the drop list once initialized

  ngAfterViewInit(): void {
    // Initialize layoutDropList after view initialization
    if (this.itemLayoutComponent) {
      this.layoutDropList = this.itemLayoutComponent.dropList;
    }
  }
}
