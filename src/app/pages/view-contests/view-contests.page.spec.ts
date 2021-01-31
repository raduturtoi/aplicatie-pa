import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewContestsPage } from './view-contests.page';

describe('ViewContestsPage', () => {
  let component: ViewContestsPage;
  let fixture: ComponentFixture<ViewContestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewContestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
