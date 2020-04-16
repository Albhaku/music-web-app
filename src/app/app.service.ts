import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUserResponse } from './shared/interfaces/http-responses.interface';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	constructor(
		private http: HttpClient
	) { }

	getUser() {
		return this.http.get<RandomUserResponse>('https://randomuser.me/api');
	}
}
