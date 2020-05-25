import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSimulationComponent } from './http-simulation.component';

describe('HttpSimulationComponent', () => {
  let component: HttpSimulationComponent;
  let fixture: ComponentFixture<HttpSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
