import { Component,  OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'Chalooline';
  mediaSub:Subscription | undefined;
  deviceXs: boolean | undefined;
  constructor(public mediaObserver:MediaObserver){}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    }
    );
  }
  ngOnDestroy(){
    this.mediaSub?.unsubscribe();
  }
}
