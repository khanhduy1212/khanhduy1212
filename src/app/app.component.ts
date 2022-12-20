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
    this.http.get('https://639550ff86829c49e831995e.mockapi.io/products').subscribe(data => {
      console.log(data);
      this.kq = data;
    });
  }
}
