import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './Service/app.service';

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
  buildings: any[] = [];
  floors: any[] = [];
  constructor(private http: HttpClient, private service: AppService) {}
  ngOnInit() {
    this.loadClients();
  }
  loadClients() {
    this.service.getAllClient().subscribe((result: any) => {
      this.clients = result.data;
    });
  }

  getSitesByClientId() {
    this.service.getSitesByClient(this.clientId).subscribe((result: any) => {
      this.sites = result.data;
    });
  }
  getBuildingBySiteId() {
    this.service.getBuildingBySite(this.siteId).subscribe((result: any) => {
      this.buildings = result.data;
    });
  }

  getFloorByBuildingId() {
    this.service
      .getFloorByBuilding(this.buildingId)
      .subscribe((result: any) => {
        this.floors = result.data;
      });
  }
}
