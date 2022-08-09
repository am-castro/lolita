import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latests-post',
  templateUrl: './latests-post.component.html',
  styleUrls: ['./latests-post.component.scss']
})
export class LatestsPostComponent implements OnInit {

  creator = [
    {
      id:1,
      name: 'Larissa Bianca',
      description: 'Criadora de conteúdo'    
    }
  ]
  bippys: Array<any> = [
      {photo:'./assets/img/lolita1.jpeg', creator_id: 1, likes: 5, description: 'Lolita, além de amada, come muito bem. Se alimenta de carne de gado, pois ela não come frango. Ela gosta muuuito de ossos, e não a julgo por isso, ela é muito sapeca...'},
      {photo:'./assets/img/lolita2.jpeg', creator_id: 1, likes: 5, description: 'Lolita gosta de morder as meias e ficar com elas na boca, quem chegar perto ela rosna! As meias do tio Moabe estão...'},
      {photo:'./assets/img/lolita2.jpeg', creator_id: 1, likes: 5, description: 'Lolita gosta de morder as meias e ficar com elas na boca, quem chegar perto ela rosna! As meias do tio Moabe estão...'},
      {photo:'./assets/img/lolita2.jpeg', creator_id: 1, likes: 5, description: 'Lolita gosta de morder as meias e ficar com elas na boca, quem chegar perto ela rosna! As meias do tio Moabe estão...'},
      {photo:'./assets/img/lolita1.jpeg', creator_id: 1, likes: 5, description: 'Lolita, além de amada, come muito bem. Se alimenta de carne de gado, pois ela não come frango. Ela gosta muuuito de ossos, e não a julgo por isso, ela é muito sapeca...'}
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.bippys);
    
  }

}
