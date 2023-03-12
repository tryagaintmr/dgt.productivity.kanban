import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IKanban } from '../../Kanban';

@Component({
  selector: 'app-create-kanban-modal',
  templateUrl: './create-kanban-modal.component.html',
  styleUrls: ['./create-kanban-modal.component.scss'],
})
export class CreateKanbanModalComponent implements OnInit {
  kanbans: IKanban[] = [];

  newKanban: IKanban = {
    id: 0,
    title: '',
    description: '',
    createdDate: new Date().toISOString(),
    createdBy: { ID: 0, EMail: '', Title: '' },
    lastModifiedDate: new Date().toISOString(),
    lastModifiedBy: { ID: 0, EMail: '', Title: '' }
  };

  newKanbanTitle: string = '';
  newKanbanDescription: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {}

  async onClose() {
    await this.modalController.dismiss();
  }

  async onSubmit() {
    const newKanban: IKanban = {
      id: Date.now(),
      title: this.newKanbanTitle,
      description: this.newKanbanDescription,
      createdDate: new Date().toISOString(),
      createdBy: undefined,
      lastModifiedDate: new Date().toISOString(),
      lastModifiedBy: undefined
    };

    await this.modalController.dismiss(newKanban);
  }
}
