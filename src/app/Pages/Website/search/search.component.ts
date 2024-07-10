// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrl: './search.component.css'
// })
// export class SearchComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchCriteria = {
    origin: '',
    destination: '',
    departureDate: ''
  };

  flights: string[] = [];

  onSearch() {
    // For demonstration, using hardcoded flight data
    this.flights = [
      `Flight from ${this.searchCriteria.origin} to ${this.searchCriteria.destination} on ${this.searchCriteria.departureDate}`
    ];
  }
}
