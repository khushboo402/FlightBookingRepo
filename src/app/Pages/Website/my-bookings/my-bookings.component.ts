import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings = [
    {
      flight: 'Flight 101',
      origin: 'Mumbai',
      destination: 'Indore',
      departureDate: '2024-07-10',

    },
    {
      flight: 'Flight 202',
      origin: 'Chicago',
      destination: 'Miami',
      departureDate: '2024-08-15',

    }
  ];

  ngOnInit(): void {
    // This is where you would load actual bookings data
    // from a service, possibly using an API call.
  }
}
