import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';


import { PlacesService } from 'src/app/places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place?:Place;
constructor(private route: ActivatedRoute,
  private placesService: PlacesService,
  private navCtr: NavController,
  private modelCrt: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // procesing
    //this.router.navigateByUrl('/places/tabs/discover')
    //this.navCtr.navigateBack('/places/tabs/discover');
    // this.navCtr.pop();


  
      this.modelCrt
      .create({
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.place}
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if(resultData.role === 'confirm'){
          console.log('BOOKED!');
        }
      })
    }
  
  }