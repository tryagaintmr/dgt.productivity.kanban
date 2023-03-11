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
