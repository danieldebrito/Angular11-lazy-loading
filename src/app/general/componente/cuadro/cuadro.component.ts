import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  @Output()eventoCambioDeColor: EventEmitter<any> = new EventEmitter<any>();
  @Input() colorPorInput: string;

  constructor() { }


  enviarColor(event){
    this.eventoCambioDeColor.emit(event.target.classList[3]);
    // console.log(event.target.classList[3]);

  }

  ngOnInit(): void {
  }

}
