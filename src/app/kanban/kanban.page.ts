import { KanbanServiceMock } from './kanban-list-mock.service';
import { KANBANS } from './data';
import { Component, OnInit } from '@angular/core';
import { IKanban } from './Kanban';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {
  kanbans: IKanban[] = [];
  selectedKanbanIndex = 0; // default index
  selectedKanban: IKanban = KANBANS[this.selectedKanbanIndex];

  ngOnInit(): void {
    this.kanbanService.getAllKanbans().subscribe(kanbans => {
      this.kanbans = kanbans;
    });
  }
  constructor(private kanbanService: KanbanServiceMock) { }


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

  deleteKanban(id: number) {
    this.kanbanService.deleteKanban(id).subscribe(() => {
      // Remove the Kanban from the list
      this.kanbans = this.kanbans.filter(k => k.id !== id);
      console.log(`Kanban with ID ${id} deleted`);
    });
  }

  addKanban() {
    const newKanban: IKanban = {
      id: this.kanbans.length + 1,
      title: 'New Kanban',
      description: 'New Kanban description',
      createdDate: new Date().toISOString(),
      createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
      lastModifiedDate: new Date().toISOString(),
      lastModifiedBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' }
    };

    this.kanbanService.addKanban(newKanban).subscribe(kanban => {
      this.kanbans.push(kanban);
      console.log(`Kanban with ID ${kanban.id} added`);
    });
  }


}
