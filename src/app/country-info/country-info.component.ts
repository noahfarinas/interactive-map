import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
})
export class CountryInfoComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch all country data from the API and log it to the console
    this.apiService.getAllCountries().subscribe((data: any) => {
      console.log(data); // Log the entire response data to the console
    });
  }
}
