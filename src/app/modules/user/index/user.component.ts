import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import {
  EnumUserEntityStatus,
  UserEntity,
  UsersService,
} from '../../../services';
import { DataResult } from '../../../common/common.model';
import { Router } from '@angular/router';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tableServiceParam: any = {
    limit: 10,
    page: 1,
    sort: ['createdAt,ASC', 'fullName,ASC'],
    filter: [],
    join: ['role'],
  };
  data: any;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.globalVariant.setHeader({
      title: 'Danh sách thành viên',
      buttonRight: {
        title: 'Thêm mới',
        url: '/user/create',
        type: 'primary',
      },
    });
  }

  getData(): void {
    // this.globalVariant.setIsLoading(true);
    // UsersService.getManyBase(this.tableServiceParam)
    //   .then((response: DataResult<UserEntity>) => {
    //     this.globalVariant.setIsLoading(false);
    //     this.data = response;
    //   })
    //   .catch((error) => {
    //     this.globalVariant.setIsLoading(false);
    //     this.common.alertError(error.message);
    //   });
    const dt = [];
    for (let i = 0; i < 20; i++) {
      dt.push({
        id: i + 1,
        fullName: `Nguyễn Văn A ${i + 1}`,
        createdAt: addDays(new Date(), i + 1),
        tel: '0988999123',
        status: EnumUserEntityStatus.active,
      });
    }
    this.data = {
      data: dt,
      total: dt.length,
      pageSize: 10,
      page: 1,
    };
  }

  onEdit(item: UserEntity): void {
    this.router.navigate([`user/${item.id}`]);
  }
}
