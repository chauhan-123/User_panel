import { Component, OnInit } from '@angular/core';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { Router } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';
import { DataTransferService } from '../../shared/services/data-transfer.service';
import { HomeService } from './home.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { Pagination } from 'src/app/model/pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Pagination implements OnInit {
  profileDetail;
  profileSubscriber;
 response:any;
  constructor( private _router:Router , private _utilityService: UtilityService , private _dataService: DataTransferService,
    private homeService:HomeService) { 
      super();
    this.getBookListDetail();
  }

  ngOnInit() { 
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
  }


// Method for get books details
  getBookListDetail(){
    let data = {...this.validPageOptions}
    this.homeService.getBookListing( data).subscribe(
      (response: any) => {
        if (response) {
          var Response = response['result'];
          this.response = Response;
          this.total = response.total;
        }
      }
    )
  }

    /*
    Method For Changing The Pagination
  */
 changePage(event: MatPaginator) {
  this.pageOptionsOnChange = event;
  if (this.total == 0) {
  }
  this.getBookListDetail();
}



  
  

}
