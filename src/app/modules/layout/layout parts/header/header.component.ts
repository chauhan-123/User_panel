import { Component, OnInit, HostListener, Renderer2, AfterViewInit, ViewChild, ElementRef, RendererFactory2  } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { LayoutService } from '../../layout.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/modules/account/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  public browserRefresh: boolean;
  userName: string;
  Email: string;
  humburger = false;
  profileSubscriber;
  profileDetail;

  constructor(private _utilityService: UtilityService,
    public dialog: MatDialog, private _dataService: DataTransferService,
    private layoutService: LayoutService
  ) {

    this.getProfileDetail();
  } 



  ngOnInit() { 
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
  }



  getProfileDetail() {
    this._dataService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
          if (this.profileDetail['url'].length === 0) {
            this.profileDetail.image = 'assets/images/avatar.png';
          } else if (this.profileDetail.url.length >= 0) {
            this.profileDetail.image = `data:image/jpeg;base64,${this.profileDetail['url']}`;
            this._dataService.profileDetail.next(this.profileDetail);
          }
        }
      )

  }

  loginAndSignup(data){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '750px',
      height:'310px',
      data: data||''
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }




}



