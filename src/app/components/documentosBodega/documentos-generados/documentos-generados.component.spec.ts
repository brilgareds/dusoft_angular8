import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosGeneradosComponent } from './documentos-generados.component';

describe('DocumentosGeneradosComponent', () => {
  let component: DocumentosGeneradosComponent;
  let fixture: ComponentFixture<DocumentosGeneradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosGeneradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosGeneradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
