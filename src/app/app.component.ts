import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dependent-dropdown-api';
  clientId: string = '';
  siteId: string = '';
  buildingId: string = '';
  floorId: string = '';
  clients: any[] = [];
  sites: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadClients();
  }
  loadClients() {
    this.http
      .get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients')
      .subscribe((result: any) => {
        this.clients = result.data;
      });
  }
  getSitesByClientId() {
    this.http
      .get(
        'http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid=' +
          this.clientId
      )
      .subscribe((result: any) => {
        this.sites = result.data;
      });
  }
}
