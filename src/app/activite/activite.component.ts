import { Component, Input, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {
  @Input() monTitre:string;
  @Input() monNumero:string;
  constructor(public activiteService: ActiviteService) { }

  ngOnInit() {
  }

}
