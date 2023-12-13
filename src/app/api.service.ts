import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service a singleton available throughout the application.
})
export class ApiService {
  selectedCountryInfo: any; // Define a variable to store selected country information

  constructor(private http: HttpClient) {}

  // Define your methods here
  getCountryInfo(countryName: string): Observable<any> {
    // Replace 'API_URL' with the World Bank API endpoint to fetch country information
    const apiUrl = `https://api.worldbank.org/v2/country/${countryName}?format=json`;

    return this.http.get(apiUrl);
  }

  fetchCountryInformation(countryName: string) {
    this.getCountryInfo(countryName).subscribe((data) => {
      this.selectedCountryInfo = data; // Store the fetched information in the local variable
    });
  }

  // Add other methods as needed
}
