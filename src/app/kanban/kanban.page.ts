import { KANBANS } from './data';
import { Component, OnInit } from '@angular/core';
import { IKanban } from './Kanban';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {
  kanbans = KANBANS;
  selectedKanbanIndex = 0; // default index
  selectedKanban: IKanban = KANBANS[this.selectedKanbanIndex];

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  constructor() { }

  onKanbanSelect(selectedKanbanIndex: number) {
    try {
      if (selectedKanbanIndex < 0 || selectedKanbanIndex >= this.kanbans.length)
        throw Error('Out of range index');

      console.log('selectedKanban:', this.selectedKanban);
      console.log('selectedKanbanIndex:', selectedKanbanIndex);
      console.log('selectedKanbanId:', this.selectedKanban.id);
      this.selectedKanban = this.kanbans[selectedKanbanIndex];

      if (this.selectedKanban) {
        console.log(`Selected Kanban: ${this.selectedKanban.id} - Title: ${this.selectedKanban.title}`);
        // TODO: Load data for selected Kanban
      }
    } catch(error) {
      throw error
    }
  }
}
