import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRutinaComponent } from './listar-rutina.component';

describe('ListarRutinaComponent', () => {
  let component: ListarRutinaComponent;
  let fixture: ComponentFixture<ListarRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
