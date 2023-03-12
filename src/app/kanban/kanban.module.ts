import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KanbanPageRoutingModule } from './kanban-routing.module';

import { KanbanPage } from './kanban.page';
import { SharedModule } from '@app/shared/shared.module';
import { CreateKanbanModalComponent } from './components/create-kanban-modal/create-kanban-modal.component';
import { AppKanbanBoardComponent } from './components/app-kanban-board/app-kanban-board.component';

@NgModule({
  declarations: [KanbanPage, AppKanbanBoardComponent, CreateKanbanModalComponent],
  imports: [
    SharedModule,
    KanbanPageRoutingModule
  ],
})
export class KanbanPageModule {}
