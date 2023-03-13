import { IKanban, IKanbanTask } from "./Kanban";

export const KANBANS: IKanban[] = [
  {
    id: 1,
    title: 'Engel',
    description: 'Design a new website for a client',
    createdDate: '2022-03-01T10:00:00.000Z',
    createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
    lastModifiedDate: '2022-03-02T15:30:00.000Z',
    lastModifiedBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' }
  },
  {
    id: 2,
    title: 'Trefle',
    description: 'Develop a new mobile app for iOS and Android',
    createdDate: '2022-03-03T09:00:00.000Z',
    createdBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' },
    lastModifiedDate: '2022-03-05T11:45:00.000Z',
    lastModifiedBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' }
  },
  {
    id: 3,
    title: 'Docker',
    description: 'Write a blog post about the benefits of using Angular',
    createdDate: '2022-03-06T14:30:00.000Z',
    createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
    lastModifiedDate: '2022-03-07T16:15:00.000Z',
    lastModifiedBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' }
  }
];


export const KANBAN_TASKS: IKanbanTask[] = [
  {
    title: 'Task 1',
    description: 'This is the first task',
    status: 'new',
    attachments: [],
    assignedTo: 'User A',
    dueDate: new Date(2023, 3, 15),
    progress: 0,
    impediment: '',
    modifiedDate: new Date(),
    modifiedBy: 'User A',
    createdDate: new Date(),
    createdBy: 'User A',
    kanbanListId: 1,
    color: '#0078D4',
    tags: 'tag1, tag2',
    className: 'user-picture',
    taskGroup: 'MOA'
  },
  {
    title: 'Task 2',
    description: 'This is the second task',
    status: 'inProgress',
    attachments: [],
    assignedTo: 'User B',
    dueDate: new Date(2023, 3, 16),
    progress: 50,
    impediment: 'blocked',
    modifiedDate: new Date(),
    modifiedBy: 'User B',
    createdDate: new Date(),
    createdBy: 'User A',
    kanbanListId: 1,
    color: '#F7630C',
    tags: 'tag3,tag1',
    className: 'user-picture',
    taskGroup: 'Development'
  },
  {
    title: 'Task 3',
    description: 'This is the third task',
    status: 'done',
    attachments: [],
    assignedTo: 'User C',
    dueDate: new Date(2023, 3, 17),
    progress: 100,
    impediment: 'blocked',
    modifiedDate: new Date(),
    modifiedBy: 'User C',
    createdDate: new Date(),
    createdBy: 'User A',
    kanbanListId: 1,
    color: '#107C10',
    tags: 'tag1',
    className: 'user-picture',
    taskGroup: 'Infrastructure'
  },
  {
    title: 'Task 4',
    description: 'This is the fourth task',
    status: 'new',
    attachments: [],
    assignedTo: 'User C',
    dueDate: new Date(2023, 3, 17),
    progress: 100,
    impediment: '',
    modifiedDate: new Date(),
    modifiedBy: 'User C',
    createdDate: new Date(),
    createdBy: 'User A',
    kanbanListId: 1,
    color: '#107C10',
    tags: 'LM, MM',
    className: 'user-picture',
    taskGroup: 'MOA'
  },
];

