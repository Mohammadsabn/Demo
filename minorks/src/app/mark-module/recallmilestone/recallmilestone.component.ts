import { Component } from '@angular/core';

@Component({
  selector: 'app-recallmilestone',
  templateUrl: './recallmilestone.component.html',
  styleUrls: ['./recallmilestone.component.css']
})
export class RecallmilestoneComponent {
 
  recallDetails = [
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsRecall:'No Record Found' },
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsRecall:'No Record Found' },
    { milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', confirmAmount:'No Record Found', expectedDate:'No Record Found',markAsRecall:'No Record Found' }
  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this.recallDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}

}
