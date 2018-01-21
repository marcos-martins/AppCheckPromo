import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Observable} from "rxjs/Observable";

import {PromotionService} from './../../services/promotion.service';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage implements OnInit {

  photos : any;
  base64Image : string;

  constructor(private navCtrl: NavController, 
              private promotionService: PromotionService,
              private transfer: FileTransfer,
              private camera: Camera,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl : AlertController) {

  }

  ngOnInit(): void {
   // this.photos = [];
  } 

  deletePhoto() {
    let confirm = this.alertCtrl.create({
        title: 'Deseja remover a foto?',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              //this.photos.splice(index, 1);
              this.base64Image = null;
            }
          }
        ]
      });
    confirm.present();
   }
 
   takePhoto(){
    const options : CameraOptions = {
        quality: 50, // picture quality
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options) .then((imageData) => {
          this.base64Image = "data:image/jpeg;base64," + imageData;        
          //this.photos.push(this.base64Image);
          //this.photos.reverse();
        }, (err) => {
          this.presentToast(err);
        });
   }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
