import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutIndividualConversationComponent } from './layout-individual-conversation.component';

describe('LayoutIndividualConversationComponent', () => {
  let component: LayoutIndividualConversationComponent;
  let fixture: ComponentFixture<LayoutIndividualConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutIndividualConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutIndividualConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
