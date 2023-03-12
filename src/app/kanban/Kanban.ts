import { ISPUser } from '@app/shared/models/ISPUser';
export interface IKanban {
  id?: number;
  title: string;
  description: string;
  createdDate?: string;
  createdBy?: ISPUser;
  lastModifiedDate?: string;
  lastModifiedBy?: ISPUser;
}

export interface IKanbanTask {
  title: string;
  description: string;
  status: string;
  attachments?: string[];
  assignedTo?: string;
  dueDate?: Date;
  progress?: number;
  impediment?: string;
  modifiedDate?: Date;
  modifiedBy?: string;
  createdDate?: Date;
  createdBy?: string;
  kanbanListId?: number;
  color:string;
  tags:string;
  className:string;
}

