import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonIcon, IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarComponent,LottieComponent]
})
export class PageNotFoundPage  {
  options: AnimationOptions = {
    path: '/assets/animations/page-not-found.json',
  };

  styles = {
    width: '100%',
    height: 'auto'
  };
}
