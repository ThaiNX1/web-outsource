/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from './serviceOptions';
export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class UsersService {
  /**
   * Chi tiết Thành viên
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Thành viên
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: UserEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Thành viên
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyUserEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Thành viên
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: UserEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ConfigService {
  /**
   * Chi tiết Cấu hình
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Cấu hình
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ConfigEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Cấu hình
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyConfigEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Cấu hình
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ConfigEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class AuthService {
  /**
   * Đăng nhập bằng Email/Password
   */
  static authControllerLogin(
    params: {
      /** requestBody */
      body?: LoginDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Đăng ký tài khoản
   */
  static authControllerRegister(
    params: {
      /** requestBody */
      body?: RegisterDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/register';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Xác thực tài khoản
   */
  static authControllerVerifyAccount(
    params: {
      /** requestBody */
      body?: VerifyOtpDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/verify-account';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Gửi OTP
   */
  static authControllerSendOtpForgotPassword(
    params: {
      /** requestBody */
      body?: SendOtpForgotPasswordDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/send-otp-forgot-password';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Xác thực mã OTP đổi mật khẩu
   */
  static authControllerResetPassword(
    params: {
      /** requestBody */
      body?: ResetPasswordDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/reset-password';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class WardsService {
  /**
   * Chi tiết Xã/phường
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WardEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/wards/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Xã/phường
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: WardEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WardEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/wards/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Xã/phường
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyWardEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/wards';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Xã/phường
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: WardEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WardEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/wards';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DistrictsService {
  /**
   * Chi tiết Quận/huyện
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Quận/huyện
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: DistrictEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Quận/huyện
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyDistrictEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Quận/huyện
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: DistrictEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class PermissionsService {
  /**
   * Chi tiết Permissions
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PermissionEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permissions/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Permissions
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: PermissionEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PermissionEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permissions/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Permissions
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyPermissionEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permissions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Permissions
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: PermissionEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PermissionEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permissions';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ProvincesService {
  /**
   * Chi tiết Tỉnh/thành
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Tỉnh/thành
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ProvinceEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Tỉnh/thành
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyProvinceEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Tỉnh/thành
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ProvinceEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class RolesService {
  /**
   * Thêm Role
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: RoleEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Role
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyRoleEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Role
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: RoleEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Chi tiết Role
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách chức năng
   */
  static roleControllerRoutes(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/routes';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Cập nhật nhiều nhóm Quyền
   */
  static roleControllerUpdateMany(
    params: {
      /** requestBody */
      body?: RoleEntity[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/bulk';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class CdnService {
  /**
   * Upload media
   */
  static cdnControllerUploadFile(
    params: {
      /**  */
      files: [];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cdn/upload';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['files']) {
        if (Object.prototype.toString.call(params['files']) === '[object Array]') {
          for (const item of params['files']) {
            data.append('files', item as any);
          }
        } else {
          data.append('files', params['files'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface GetManyUserEntityResponseDto {
  /**  */
  data: UserEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface UserEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Email */
  email?: string;

  /** Mật khẩu */
  password: string;

  /** Lưu các mật khẩu cũ */
  passwordHistory?: string[];

  /** Tên */
  fullName: string;

  /** Số điện thoại */
  tel: string;

  /** Role ID */
  roleId?: number;

  /** Danh sách cấp dưới  */
  referralChildren?: UserEntity[];

  /** Id cấp trên */
  referralParentId?: number;

  /** Cấp trên */
  referralParent?: CombinedReferralParentTypes;

  /** Session sau khi gửi xác nhận SĐT với Firebase */
  sessionVerifyCode?: string;

  /** Số CMTND\/CCCD */
  nationalId?: string;

  /** Ngày cấp */
  nationalIssueDate?: Date;

  /** Nơi cấp */
  nationalIssueBy?: string;

  /** Địa chỉ */
  address?: string;

  /** Phường\/Xã */
  wardId?: number;

  /** Số tài khoản */
  bankNumber?: string;

  /** Chủ tài khoản */
  bankAccountName?: string;

  /** Chi nhánh ngân hàng */
  bankBranch?: string;

  /** Ngày sinh */
  dob?: Date;

  /** Giới tính */
  gender: EnumUserEntityGender;

  /** Trạng thái */
  status: EnumUserEntityStatus;

  /** Ảnh đại diện */
  avatar?: string;
}

export interface GetManyConfigEntityResponseDto {
  /**  */
  data: ConfigEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface ConfigEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Id dùng để lấy cấu hình từ phía đối tác */
  merchantId: number;

  /** Kiểu cấu hình */
  key: EnumConfigEntityKey;

  /** Tên cấu hình */
  name?: string;

  /** Các thuộc tính cấu hình */
  value: [];

  /** Ngày bắt đầu được áp dụng */
  startDate: Date;

  /** Ngày kết thúc áp dụng */
  endDate: Date;

  /** Ghi chú */
  note: string;
}

export interface LoginDto {
  /** Số điện thoại */
  tel: string;

  /** Mật khẩu */
  password: string;

  /** Loại đăng nhập (App\/Web) */
  type?: EnumLoginDtoType;
}

export interface LoginResponse {
  /** Access token */
  token: string;
}

export interface RegisterDto {
  /** Email */
  email?: string;

  /** Mật khẩu */
  password: string;

  /** Tên */
  fullName: string;

  /** Số điện thoại */
  tel: string;

  /** Phường\/Xã */
  wardId?: number;

  /** Ngày sinh */
  dob?: Date;

  /** Giới tính */
  gender: EnumRegisterDtoGender;

  /** Mã người giới thiệu */
  referralCode?: string;
}

export interface VerifyOtpDto {
  /** Firebase Token */
  idToken: string;

  /** Số điện thoại */
  tel: string;
}

export interface SendOtpForgotPasswordDto {
  /** Số điện thoại reset mật khẩu */
  tel: string;

  /** Recaptcha Token */
  recaptchaToken: string;
}

export interface ResetPasswordDto {
  /** Mật khẩu */
  password: string;

  /** Số điện thoại */
  tel: string;

  /** Firebase Token */
  idToken: string;
}

export interface GetManyWardEntityResponseDto {
  /**  */
  data: WardEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface GetManyDistrictEntityResponseDto {
  /**  */
  data: DistrictEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface GetManyProvinceEntityResponseDto {
  /**  */
  data: ProvinceEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface ProvinceEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Tên Tỉnh\/thành */
  name: string;

  /** ID Giao hàng nhanh */
  ghnId?: number;

  /** ID Viettel Post */
  vtpId?: number;

  /** ID Viettel Post */
  nameExtensions?: string[];

  /** Loại Tỉnh\/thành */
  type: EnumProvinceEntityType;

  /** Sắp xếp */
  position: EnumProvinceEntityPosition;
}

export interface DistrictEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Tên Quận\/huyện */
  name: string;

  /** Loại Quận\/huyện */
  type: EnumDistrictEntityType;

  /** ID Tỉnh\/thành */
  provinceId: number;

  /** Thông tin Tỉnh\/thành */
  province?: CombinedProvinceTypes;

  /** ID Giao hàng nhanh */
  ghnId?: number;

  /** ID Viettel Post */
  vtpId?: number;

  /** ID Viettel Post */
  nameExtensions?: string[];
}

export interface WardEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Tên Phường\/Xã */
  name: string;

  /** Loại Phường\/Xã */
  type: EnumWardEntityType;

  /** ID của Quận\/Huyện */
  districtId: number;

  /** Thông tin Quận\/huyện */
  district?: CombinedDistrictTypes;

  /** Code Giao hàng nhanh */
  ghnCode?: string;

  /** ID Viettel Post */
  vtpId?: number;
}

export interface GetManyPermissionEntityResponseDto {
  /**  */
  data: PermissionEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface PermissionEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Hành động */
  action: string;
}

export interface GetManyRoleEntityResponseDto {
  /**  */
  data: RoleEntity[];

  /**  */
  count: number;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  pageCount: number;
}

export interface RoleEntity {
  /** ID */
  id?: number;

  /** Thời gian tạo */
  createdAt?: Date;

  /** Thời gian cập nhật */
  updatedAt?: Date;

  /** Tên nhóm */
  name: string;

  /** Quyền */
  permissions: string[];

  /** Loại quyền */
  type: EnumRoleEntityType;
}

export interface ConfigBanner {
  /** Đường dẫn ảnh */
  image?: string;

  /** Đường dẫn khi bấm vào Banner. Nếu có giá trị thì mở luôn đường dẫn này */
  url?: string;

  /** Nội dung khi bấm vào Banner */
  content?: string;

  /** Loại */
  type?: EnumConfigBannerType;
}

export interface BankInfo {
  /** ID Ngân hàng */
  bankId: number;

  /** Tên Chủ tài khoản */
  bankAccount: string;

  /** Số tài khoản */
  bankNumber: string;

  /** Chi nhánh */
  bankBranch?: string;

  /** Email Kế toán */
  accountantEmails?: string[];
}
export type CombinedReferralParentTypes = UserEntity;
export enum EnumUserEntityGender {
  'male' = 'male',
  'female' = 'female',
  'other' = 'other'
}
export enum EnumUserEntityStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'banned' = 'banned',
  'deleted' = 'deleted'
}
export enum EnumConfigEntityKey {
  'home' = 'home',
  'make_money' = 'make_money',
  'join_community' = 'join_community',
  'flash_deal' = 'flash_deal',
  'top_commission' = 'top_commission',
  'community' = 'community',
  'good_start' = 'good_start',
  'free_course' = 'free_course',
  'current_offers' = 'current_offers',
  'flash_sale' = 'flash_sale',
  'FAQ' = 'FAQ',
  'blog' = 'blog',
  'introduce' = 'introduce',
  'revenue' = 'revenue',
  'revenue_quarter' = 'revenue_quarter',
  'product_quantity' = 'product_quantity',
  'first_order' = 'first_order',
  'register' = 'register',
  'amount_collaborator' = 'amount_collaborator',
  'product' = 'product',
  'shipping_info' = 'shipping_info',
  'bank_info' = 'bank_info'
}
export enum EnumLoginDtoType {
  'app' = 'app',
  'web' = 'web'
}
export enum EnumRegisterDtoGender {
  'male' = 'male',
  'female' = 'female',
  'other' = 'other'
}
export enum EnumProvinceEntityType {
  'city' = 'city',
  'province' = 'province'
}
export enum EnumProvinceEntityPosition {
  'city' = 'city',
  'province' = 'province'
}
export enum EnumDistrictEntityType {
  'district' = 'district',
  'town' = 'town',
  'township' = 'township',
  'city' = 'city'
}
export type CombinedProvinceTypes = ProvinceEntity;
export enum EnumWardEntityType {
  'ward' = 'ward',
  'commune' = 'commune',
  'town' = 'town'
}
export type CombinedDistrictTypes = DistrictEntity;
export enum EnumRoleEntityType {
  'admin' = 'admin',
  'customer' = 'customer',
  'member' = 'member',
  'leader' = 'leader',
  'partner' = 'partner',
  'other' = 'other'
}
export enum EnumConfigBannerType {
  'image' = 'image',
  'video' = 'video'
}
