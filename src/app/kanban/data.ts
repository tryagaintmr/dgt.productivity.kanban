import { IKanban } from "./Kanban";

export const KANBANS: IKanban[] = [
  {
    id: 1,
    title: 'Design new website',
    description: 'Design a new website for a client',
    createdDate: '2022-03-01T10:00:00.000Z',
    createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
    lastModifiedDate: '2022-03-02T15:30:00.000Z',
    lastModifiedBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' }
  },
  {
    id: 2,
    title: 'Develop mobile app',
    description: 'Develop a new mobile app for iOS and Android',
    createdDate: '2022-03-03T09:00:00.000Z',
    createdBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' },
    lastModifiedDate: '2022-03-05T11:45:00.000Z',
    lastModifiedBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' }
  },
  {
    id: 3,
    title: 'Write blog post',
    description: 'Write a blog post about the benefits of using Angular',
    createdDate: '2022-03-06T14:30:00.000Z',
    createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
    lastModifiedDate: '2022-03-07T16:15:00.000Z',
    lastModifiedBy: { ID: 2, EMail: 'janesmith@example.com', Title: 'Jane Smith' }
  }
];
