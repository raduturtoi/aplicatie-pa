import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddContestPage } from './add-contest.page';

describe('AddContestPage', () => {
  let component: AddContestPage;
  let fixture: ComponentFixture<AddContestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddContestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
