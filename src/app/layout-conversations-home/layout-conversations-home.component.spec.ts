import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConversationsHomeComponent } from './layout-conversations-home.component';

describe('LayoutConversationsHomeComponent', () => {
  let component: LayoutConversationsHomeComponent;
  let fixture: ComponentFixture<LayoutConversationsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutConversationsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutConversationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
