import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Website-BanTraiCay';

  kq:any;

  constructor (private http:HttpClient) {}

  ngOnInit() {
    this.http.get('https://60ae6af05b8c300017dea7a4.mockapi.io/Products').subscribe(data => {
      console.log(data);
      this.kq = data;
    });
  }
}
