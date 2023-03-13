import { KANBAN_TASKS } from './../../data';
import { IKanban, IKanbanTask } from './../../Kanban';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CardSettingsModel, ColumnsModel, DialogSettingsModel, KanbanComponent, StackedHeadersModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { extend } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'fr': {
      'kanban': {
          'items': 'Items',
          'min': 'Min',
          'max': 'Max',
          'cardsSelected': 'Tâche sélectionnée',
          'addTitle': 'Nouvelle tâche',
          'editTitle': 'Editer la tâche',
          'deleteTitle': 'Supprimer la tâche',
          'deleteContent': 'Möchten Sie diese Karte wirklich löschen?',
          'save': 'Sauvegarder',
          'delete': 'Supprimer',
          'cancel': 'Annuler',
          'yes': 'Oui',
          'no': 'Non',
          'close': 'Fermer',
          'noCard': 'Aucune tâche',
          'unassigned': 'Aucun groupe'
      }
  }
});
@Component({
  selector: 'app-kanban-board',
  templateUrl: './app-kanban-board.component.html',
  styleUrls: ['./app-kanban-board.component.scss'],
})
export class AppKanbanBoardComponent implements OnInit {

  @Input() kanban!: IKanban;
  public dataSource!: IKanbanTask[];

  @ViewChild('kanbanObj')  kanbanObj!: KanbanComponent;
  public kanbanData: Object[] = extend([], KANBAN_TASKS, undefined, true) as Object[];

  constructor() { }

  ngOnInit() {
  }

  public cardSettings: CardSettingsModel  = {
    contentField: 'description',
    headerField: 'title',
    tagsField: 'tags',
    grabberField: 'color',
  };

  public columns: ColumnsModel[] = [
    { headerText: 'Nouveau', keyField: 'new', showItemCount: true },
    { headerText: 'En cours', keyField: 'inProgress', showItemCount: true },
    { headerText: 'Revue/Test', keyField: 'underReview', showItemCount: true },
    { headerText: 'Fini', keyField: 'done', showItemCount: true}
  ];

  public dialogSettings: DialogSettingsModel = {
    fields: [
        // { key: 'id', type: 'TextBox',  },
        { key: 'status', type: 'DropDown' },
        { key: 'title', type: 'TextArea' },
        { key: 'description', type: 'TextArea' },
        { key: 'impediment', type: 'DropDown' },
        { key: 'taskGroup', type: 'TextArea' }
    ]
  };

  public stackedHeaders: StackedHeadersModel[] = [
    { text: 'To Do', keyFields: 'new' },
    { text: 'Development Phase', keyFields: 'inProgress, underReview' },
    { text: 'Done', keyFields: 'done' }
  ];

  public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'taskGroup', showEmptyRow: true, showUnassignedRow: true };

}
