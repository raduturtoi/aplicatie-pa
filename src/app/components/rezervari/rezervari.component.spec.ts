import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RezervariComponent } from './rezervari.component';

describe('RezervariComponent', () => {
  let component: RezervariComponent;
  let fixture: ComponentFixture<RezervariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervariComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RezervariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
