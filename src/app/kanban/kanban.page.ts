import { KanbanServiceMock } from './kanban-list-mock.service';
import { Component, OnInit } from '@angular/core';
import { IKanban } from './Kanban';
import { ModalController } from '@ionic/angular';
import { CreateKanbanModalComponent } from './components/create-kanban-modal/create-kanban-modal.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {
  kanbans: IKanban[] = [];
  selectedKanbanIndex = 0; // default index
  selectedKanban: IKanban = { title : '', description : ''};



  ngOnInit(): void {
    this.kanbanService.getAllKanbans().subscribe(kanbans => {
      this.kanbans = kanbans;
      this.selectedKanban = this.kanbans[this.selectedKanbanIndex];

    });
  }
  constructor(private kanbanService: KanbanServiceMock,
    private modalController: ModalController) {

     }


  onKanbanSelect(selectedKanbanIndex: number) {
    try {
      if (selectedKanbanIndex < 0 || selectedKanbanIndex >= this.kanbans.length)
        throw Error('Out of range index');
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

  async onAddKanban() {
    const modal = await this.modalController.create({
      component: CreateKanbanModalComponent
    });
    modal.onDidDismiss().then((result) => {

      console.log('Kanban created', result);

      if (result && result.data) {
        this.kanbanService.addKanban(result.data).subscribe((newKanban: IKanban) => {
          console.log('New Kanban:', newKanban);
          this.kanbans.push(newKanban);
        });
      }
    });
    return await modal.present();
  }

  async onAddKanbanModalClose() {
    const modal = await this.modalController.getTop();
    modal!.dismiss();
  }


}
