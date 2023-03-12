import { KANBAN_TASKS } from './../../data';
import { IKanban, IKanbanTask } from './../../Kanban';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CardSettingsModel, ColumnsModel, DialogSettingsModel, KanbanComponent, StackedHeadersModel } from '@syncfusion/ej2-angular-kanban';
// import { CardSettingsModel, ColumnsModel, DialogSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { extend } from '@syncfusion/ej2-base';

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
    { headerText: 'New', keyField: 'new', showItemCount: true },
    { headerText: 'In Progress', keyField: 'inProgress', showItemCount: true },
    { headerText: 'Under Review', keyField: 'underReview', showItemCount: true },
    { headerText: 'Done', keyField: 'done', showItemCount: true}
  ];

  public dialogSettings: DialogSettingsModel = {
    fields: [
        // { key: 'id', type: 'TextBox',  },
        { key: 'status', type: 'DropDown' },
        { key: 'title', type: 'TextArea' },
        { key: 'description', type: 'TextArea' },
        { key: 'impediment', type: 'DropDown' },
    ]
};

  public stackedHeaders: StackedHeadersModel[] = [
    { text: 'Story Cards', keyFields: 'new,inProgress,underReview,done' }
  ];

}
