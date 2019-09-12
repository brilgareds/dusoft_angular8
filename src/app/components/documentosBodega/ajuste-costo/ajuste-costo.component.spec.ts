import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteCostoComponent } from './ajuste-costo.component';

describe('AjusteCostoComponent', () => {
  let component: AjusteCostoComponent;
  let fixture: ComponentFixture<AjusteCostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusteCostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
