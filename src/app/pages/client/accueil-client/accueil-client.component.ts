import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-accueil-client',
  imports: [
    CarouselModule,
    CardModule,
    RatingModule,
    DialogModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './accueil-client.component.html',
  styleUrl: './accueil-client.component.scss'
})
export class AccueilClientComponent implements OnInit {

  customerReviews: any[] = [];
  numVisible: number = 3;
  displayReviewDialog: boolean = false;
  newReview: any = { rating: 0, comment: '' };

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.customerReviews = [
      { name: 'John Doe', comment: 'Excellent service!', rating: 5 },
      { name: 'Jane Smith', comment: 'Très satisfait de la réparation.', rating: 4 },
      { name: 'Paul Brown', comment: 'Rapide et efficace.', rating: 4 },
      { name: 'Alice White', comment: 'Très bon accueil.', rating: 5 },
      { name: 'Bob Green', comment: 'Je recommande.', rating: 5 },
    ];

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.numVisible = 1;
      } else {
        this.numVisible = 3;
      }
    });
  }

  showReviewDialog() {
    this.displayReviewDialog = true;
  }

  submitReview() {
    if (this.newReview.rating && this.newReview.comment) {
      this.customerReviews.push({
        name: 'Anonymous',
        comment: this.newReview.comment,
        rating: this.newReview.rating
      });
      this.newReview = { rating: 0, comment: '' };
      this.displayReviewDialog = false;
    }
  }

}
