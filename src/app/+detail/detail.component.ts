import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class Detail {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
