import { Component } from '@angular/core';


export interface materiasHorarios {
  hora: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
}

const ELEMENT_DATA: materiasHorarios[] = [
  {hora: '08:00 - 08:40', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: ''},
  {hora: '08:40 - 09:20', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: 'Gestión de proyectos'},
  {hora: '09:20 - 10:00', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: 'Gestión de proyectos'},
  {hora: '10:00 - 10:40', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: 'BDD2', jueves: 'Programación 2', viernes: 'Gestión de proyectos'},
  {hora: '10:40 - 11:20', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: '', jueves: 'Programación 2', viernes: 'Gestión de proyectos'},
  {hora: '11:20 - 12:00', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: '', jueves: 'Programación 2', viernes: ''},
  {hora: '12:00 - 12:40', lunes: 'Redes y comunicación', martes: '', miercoles: '', jueves: '', viernes: ''}
];



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})


export class SectionComponent {

  displayedColumns: string[] = ['hora', 'lunes', 'martes','miercoles','jueves','viernes'];
  dataSource = ELEMENT_DATA;
}
