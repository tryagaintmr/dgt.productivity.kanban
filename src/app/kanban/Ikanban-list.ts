import { Observable } from "rxjs";
import { IKanban } from "./Kanban";

export interface IKanbanService {
  getAllKanbans(): Observable<IKanban[]>;
  getKanbanById(id: number): Observable<IKanban | undefined>;
  getKanbansByTitleContains(title: string): Observable<IKanban[]>;
  addKanban(kanban: IKanban): Observable<IKanban>;
  deleteKanban(id: number): Observable<void>;
}
