import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { AUTH } from 'app/shared/consts/auth.const';

import { CookieService } from './cookie.service';

@Injectable()
export class APIService {

	public Header:HttpHeaders;
	public Token: HttpHeaders;

	constructor(private cookies:CookieService) {

		let Header: HttpHeaders = new HttpHeaders();
        
        this.Token = Header.append('Authorization', `${cookies.get(AUTH.TOKEN)}`)
        
	}
}