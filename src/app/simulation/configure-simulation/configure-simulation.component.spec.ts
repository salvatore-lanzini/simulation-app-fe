import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSimulationComponent } from './configure-simulation.component';

describe('ConfigureSimulationComponent', () => {
  let component: ConfigureSimulationComponent;
  let fixture: ComponentFixture<ConfigureSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
