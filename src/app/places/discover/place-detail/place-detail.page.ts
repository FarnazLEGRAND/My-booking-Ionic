import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place?:Place;

  constructor(private router: Router, private navCtr: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // procesing
    //this.router.navigateByUrl('/places/tabs/discover')
    //this.navCtr.navigateBack('/places/tabs/discover');
    this.navCtr.pop();
  }

}