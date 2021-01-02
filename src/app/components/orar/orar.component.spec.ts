import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrarComponent } from './orar.component';

describe('OrarComponent', () => {
  let component: OrarComponent;
  let fixture: ComponentFixture<OrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
