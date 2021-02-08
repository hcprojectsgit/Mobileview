import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendfreelink',
  templateUrl: './sendfreelink.component.html',
  styleUrls: ['./sendfreelink.component.css']
})
export class SendfreelinkComponent implements OnInit {

  
  copyInputMessage(inputElement: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
