import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };
  oldEvent = { title: "", location: "", message: "", startDate: "", endDate: "" };

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private calender: Calendar) {
    this.event = navParams.get("event");
    var startDate = new Date(navParams.get("event").startDate.replace(/\s/, 'T')).toISOString();
    var endDate = new Date(navParams.get("event").endDate.replace(/\s/, 'T')).toISOString();
    this.event.startDate = startDate;
    this.event.endDate = endDate;
    this.oldEvent = this.event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

}
