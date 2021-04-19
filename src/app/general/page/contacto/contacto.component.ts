import { Component, OnInit } from '@angular/core';
import { cards, ContactoService } from './contacto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public colorDeMensaje: string = 'ningunColor';

  cards: Observable<cards[]>;

  constructor( private contacto_S: ContactoService) { }

  cambiarColor(color) {
    switch (color) {
      case 'btn-danger':
        this.colorDeMensaje = 'Rojo'
        break;

      default:
        break;
    }
    // this.colorDeMensaje = color;
    // console.log(color);
  }

  ngOnInit(): void {
    this.cards = this.contacto_S.getItems();

  }

}
