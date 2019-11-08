import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { MatDialog } from '@angular/material';
import { BuyNowComponent } from '../buy-now/buy-now.component';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {
bookId:'';
userDetails:any;
  constructor( private _route:ActivatedRoute , private homeService: HomeService,
    public dialog: MatDialog) { 
    this.bookId = this._route.snapshot.params.bookId;
    this.getBooksDetails();
  }

  ngOnInit() {
  }

  getBooksDetails(){
    this.homeService.getBooksDetails({ bookId: this.bookId })
    .subscribe(response=>{
     this.userDetails = response.result[0];
    }  
    )
  }

  addBuyBook(category?){
    const dialogRef = this.dialog.open(BuyNowComponent, {
      width: '750px',
      height:'300px',
      data: category||''
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}