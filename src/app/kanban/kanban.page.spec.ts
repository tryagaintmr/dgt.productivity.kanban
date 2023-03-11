import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { KANBANS } from './data';
import { IKanban } from './Kanban';

import { KanbanPage } from './kanban.page';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


describe('KanbanPage', () => {
  let component: KanbanPage;
  let fixture: ComponentFixture<KanbanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanPage],
      imports: [IonicModule.forRoot(), FormsModule, CommonModule, SharedModule],
      providers: [DatePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedKanban and selectedKanbanIndex when onKanbanSelect is called with a valid kanban id', () => {
    const kanban: IKanban = KANBANS[1];
    component.selectedKanban = KANBANS[0]; // Set the selectedKanban to a different one
    component.onKanbanSelect(1);
    expect(component.selectedKanban).toEqual(kanban);
    expect(component.selectedKanbanIndex).toEqual(0);
  });

  it('should not update selectedKanban and selectedKanbanIndex when onKanbanSelect is called with non-existing kanban id', () => {
    const previousSelectedKanban = component.selectedKanban;
    const previousSelectedKanbanIndex = component.selectedKanbanIndex;
    component.selectedKanbanIndex = KANBANS.length + 1; // Set the selectedKanbanIndex to a non-existing index
    expect(() => component.onKanbanSelect(KANBANS.length + 1)).toThrowError('Out of range index');
    expect(component.selectedKanban).toEqual(previousSelectedKanban);
  });

  it('should not update selectedKanban and selectedKanbanIndex when onKanbanSelect is called with index 0', () => {
    const previousSelectedKanban = component.selectedKanban;
    const previousSelectedKanbanIndex = component.selectedKanbanIndex;
    component.onKanbanSelect(0); // Pass index 0
    expect(component.selectedKanban).toEqual(previousSelectedKanban);
    expect(component.selectedKanbanIndex).toEqual(previousSelectedKanbanIndex);
  });


  it('should update selectedKanban, selectedKanbanTitle, and ion-title when onKanbanSelect is called', () => {
    const kanban: IKanban = KANBANS[2];
    component.selectedKanban = KANBANS[0]; // Set the selectedKanban to a different one
    component.selectedKanbanIndex = 2;
    component.onKanbanSelect(component.selectedKanbanIndex);
    expect(component.selectedKanban).toEqual(kanban);
    expect(component.selectedKanban.title).toEqual(kanban.title);
    fixture.detectChanges();
    
    const ionTitle = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(ionTitle.textContent.trim()).toEqual(`kanban ${kanban.title}`);
  });

  it('should contain ion-select-options equal to KANBANS length if the select interface is popover', () => {
    const selectEl = fixture.debugElement.query(By.css('#selectKanbanDdl'));
    if (selectEl.nativeElement.getAttribute('interface') === 'popover') {
      const optionEls = selectEl.nativeElement.querySelectorAll('ion-select-option');
      expect(optionEls.length).toEqual(component.kanbans.length);
    }
  });


});
