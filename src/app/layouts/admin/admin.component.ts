import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { GlobalVariable } from '../../common/global-variable';
import { INavData, navItems } from './nav/nav';
import axios, { AxiosRequestConfig } from 'axios';
import { serviceOptions } from '../../services/serviceOptions';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as Qs from 'qs';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewChecked {
  isCollapsed = false;
  isLoading = false;
  header: any;
  sidebarItems: INavData[] = [];

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router,
    private cookie: CookieService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.sidebarItems = [
      {
        name: 'Tổng quan',
        url: '/dashboard',
        icon: 'home',
        visible: true,
      },
      {
        name: 'Nhân sự',
        url: '/user',
        icon: 'team',
        visible: true,
      },
      {
        name: 'Cài đặt',
        url: '',
        icon: 'setting',
        children: [
          {
            name: 'Nhóm quyền',
            url: '/setting/role',
            icon: '',
          },
          {
            name: 'Phân quyền',
            url: '/setting/permission',
            icon: '',
          },
        ],
      },
    ];

    this.globalVariant.isLoading.subscribe((value) => (this.isLoading = value));
    this.globalVariant.header.subscribe((value) => (this.header = value));
    // let axiosConfig: AxiosRequestConfig = {
    //   baseURL: 'http://localhost:5005/',
    //   timeout: 60000, // 1 phút
    //   paramsSerializer: function (params) {
    //     return Qs.stringify(params, { arrayFormat: 'repeat' });
    //   },
    // };
    // const userTokenData = jwt_decode(this.cookie.get('token'));
    // if (userTokenData) {
    //   const token = this.cookie.get('token');
    //   axiosConfig = {
    //     ...axiosConfig,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   };
    //   serviceOptions.axios = axios.create(axiosConfig);
    // } else {
    //   this.router.navigate(['auth/login']);
    // }
  }

  logOut(): void {
    this.cookie.delete('token');
    this.router.navigate(['auth/login']);
  }

  redirectLink(sidebarItem: INavData): void {
    this.router.navigate([sidebarItem.url]);
  }

  onClick(): void {
    this.router.navigate([this.header.buttonRight?.url]);
  }
}
