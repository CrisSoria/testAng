import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  paragraphs = [
    'Desde pequeño me apasiona la lógica y poder usarla para la resolución de problemas. Descubrí la programación en la universidad mientras estudiaba Ingeniería Civil.',
    'Durante mis experiencias laborales, me di cuenta que mediante el código, podía automatizar tareas que eran repetitivas  mejorando mi productividad y disminuyendo errores.',
    'Para poder realizar mis primeros programas me convertí en autodidacta y así descubrí el bootcamp de Henry. Brindándome la posibilidad de profesionalizarme y vivir de lo que me apasiona.',
    'Actualmente estoy en busca de desarrollo profesional y adquirir experiencia en proyectos trabajando en equipo.',
  ];
  general = ['JavaScript', 'Typescript', 'Git'];
  back = [
    'Node',
    'Express',
    'PHP',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Heroku',
  ];
  front = ['REACT', 'Redux', 'React Native', 'HTML', 'CSS', 'Apollo Client'];

  constructor() {}

  ngOnInit(): void {}
}
