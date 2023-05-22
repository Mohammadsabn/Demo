import { Component } from '@angular/core';


@Component({
  selector: 'app-mark-details',
  templateUrl: './mark-details.component.html',
  styleUrls: ['./mark-details.component.css']
})
export class MarkDetailsComponent {

  
  markDetails = [
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsConfirmed:'No Record Found' },
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsConfirmed:'No Record Found' },
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsConfirmed:'No Record Found' }
  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this.markDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}

}
