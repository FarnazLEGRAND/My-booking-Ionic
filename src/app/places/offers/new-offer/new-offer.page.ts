import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
newOffer!:Place
  constructor() { }

  ngOnInit() {
  }

}
