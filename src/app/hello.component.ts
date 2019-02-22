import { Component, Input } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() course: string;
  todo;

  constructor(private helloService: HelloService) {
    helloService.getTodo()
      .toPromise()
      .then((response) => {
        console.log(response);
        this.todo = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
