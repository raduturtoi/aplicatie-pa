import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CALENDARPage } from './calendar.page';

describe('CALENDARPage', () => {
  let component: CALENDARPage;
  let fixture: ComponentFixture<CALENDARPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CALENDARPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CALENDARPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
