/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListaPlantasComponent } from './lista-plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantasService } from '../plantas.service';
import { Planta } from '../planta';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListaPlantasComponent],
      providers: [PlantasService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;

    let plantas = [];

    for (let i = 0; i < 4; i++) {
      plantas.push(
        new Planta(
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.string(),
          faker.datatype.string(),
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.string()
        )
      );
    }

    component.plantas = plantas

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {

    const nombre_comun = debug.queryAll(By.css('.nombre_comun'));
    expect(nombre_comun[0].nativeElement.textContent.trim()).toEqual(component.plantas[0].nombre_comun)
    expect(nombre_comun[1].nativeElement.textContent.trim()).toEqual(component.plantas[1].nombre_comun)
    expect(nombre_comun[2].nativeElement.textContent.trim()).toEqual(component.plantas[2].nombre_comun)

  });
});
