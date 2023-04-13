import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}
  getAllClient() {
    return this.httpClient.get(
      'http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients'
    );
  }
  getSitesByClient(clientId: string) {
    return this.httpClient.get(
      'http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid=' +
        clientId
    );
  }
  getBuildingBySite(siteId: string) {
    return this.httpClient.get(
      'http://onlinetestapi.gerasim.in/api/GetValet/getBuildingBySiteId?id=' +
        siteId
    );
  }
  getFloorByBuilding(buildingId: string) {
    return this.httpClient.get(
      'http://onlinetestapi.gerasim.in/api/GetValet/GetFloorsByBuildingId?id=' +
        buildingId
    );
  }
}
