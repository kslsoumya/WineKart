import { Component, OnInit } from '@angular/core';


import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderPipe } from 'ngx-order-pipe';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  public productsList = [];
  public originalList = [];
  public p = 1;
  public i = 0;
  public isCountry = true;
  public isProvince = false;
  public isRegion = false;
  public isVariety = false;
  public isRegionFilter = false;
  public selectedCountry;
  public selectedProvince;
  public selectedRegion;
  public selectedVariety;
  public reverse = false;
  public order = 'winery';
  public modalProduct;

  constructor(private httpService: HttpService,
    private orderPipe: OrderPipe, public spinner: NgxSpinnerService, private toastr: ToastrService,
    private _router: Router,
    private cookieService: CookieService, ) {
    this.productsList = this.orderPipe.transform(this.productsList, 'winery');
    this.originalList = this.productsList;

  }

  ngOnInit() {
    this.spinner.show();

    this.httpService.getAllProducts().subscribe(
      (data) => {
        if (data['data'] !== null && data['data'].length > 0) {
          this.spinner.hide();
        }
        if (data['status'] === 200) {
          this.productsList = data['data'];
          this.originalList = this.productsList;
          // console.log(this.productsList);
        } else {
          this.toastr.warning(data['message']);
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error(err);
      }
    );

  }

  public reachHome = () => {
    this.productsList = this.originalList;
    this.isCountry = true;
    this.isProvince = false;
    this.isRegion = false;
    this.isVariety = false;
    this.isRegionFilter = false;

  }

  public countryFilter = (name) => {
    this.spinner.show();
    this.toastr.info(`${name} filter applied`);
    this.selectedCountry = name;
    this.isCountry = false;
    this.isProvince = true;
    this.isVariety = false;
    this.isRegionFilter = false;
    this.httpService.getProductByCountry(name).subscribe(
      (data) => {
        if (data['status'] === 200) {
          this.spinner.hide();
          this.productsList = data['data'];

        } else {
          this.toastr.warning(data['message']);

        }
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  public region1Filter = (name) => {
    this.spinner.show();
    this.toastr.info(`${name} filter applied`);
    this.isProvince = false;
    this.isRegion = false;
    this.isRegionFilter = true;
    this.isVariety = false;
    this.selectedRegion = name;
    this.httpService.getProductByRegion1(name).subscribe(
      (data) => {
        if (data['status'] === 200) {
          this.spinner.hide();
          this.productsList = data['data'];
        } else {
          this.toastr.warning(data['message']);
        }
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  public region2Filter = (name) => {
    this.toastr.info(`${name} filter applied`);
    this.isProvince = false;
    this.isRegion = false;
    this.isRegionFilter = true;
    this.isVariety = false;
    this.selectedRegion = name;
    this.httpService.getProductByRegion2(name).subscribe(
      (data) => {
        if (data['status'] === 200) {
          this.productsList = data['data'];
        } else {
          this.toastr.warning(data['message']);
        }
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  public provinceFilter = (name) => {
    this.toastr.info(`${name} filter applied`);
    this.spinner.show();
    this.selectedProvince = name;
    this.isProvince = false;
    this.isRegion = true;
    this.isVariety = false;
    this.isRegionFilter = false;
    this.httpService.getProductByProvince(name).subscribe(
      (data) => {
        if (data['status'] === 200) {
          this.spinner.hide();
          this.productsList = data['data'];
        } else {
          this.toastr.warning(data['message']);
        }
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  public varietyFilter = (name) => {
    this.toastr.info(`${name} filter applied`);
    this.spinner.show();
    this.selectedVariety = name;
    this.isVariety = true;
    this.isProvince = false;
    this.isRegion = false;
    this.isRegionFilter = false;
    this.httpService.getProductByVariety(name).subscribe(
      (data) => {
        if (data['status'] === 200) {
          this.spinner.hide();
          this.productsList = data['data'];
        } else {
          this.toastr.warning(data['message']);
        }
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }

  public setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  public modalClick = (product) => {
    // console.log(product);
    this.modalProduct = product;
  }

  public logOut: any = () => {
    this.httpService.logOutFunction()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.cookieService.deleteAll();
          this._router.navigate(['/']);
        } else {
          this.toastr.error(resp.message);
        }
      },
        (err) => {
          this.toastr.error(err.message);
        });
  }

}
