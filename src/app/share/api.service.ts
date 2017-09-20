import { Injectable } 			from '@angular/core';
import {
	HttpClient,
	HttpParams,
	HttpHeaders
}								from '@angular/common/http';

import { Observable }           from 'rxjs/Observable';

@Injectable()
export class ApiService {

	baseUrl = '/server.php/wapi/';

	constructor(
		public http: HttpClient
	) { }

	public get(uri, params?: HttpParams): Observable<any> {
		return this.http.get(this.baseUrl+uri, {params});
	}

	public put(uri, params?: any): Observable<any> {
	    let headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.put(this.baseUrl+uri, JSON.stringify(params), {headers});
	}

	public patch(uri, params?: any): Observable<any> {
	    let headers = new HttpHeaders({'Content-Type': 'application/json'});
	    return this.http.patch(this.baseUrl+uri, JSON.stringify(params), {headers});
	}

	public post(uri, params?: any): Observable<any> {
		let headers = new HttpHeaders({'Content-Type': 'application/json'});
	    return this.http.post(this.baseUrl+uri, JSON.stringify(params), {headers});
	}

	public del(uri): Observable<any> {
	    let headers = new HttpHeaders({'Content-Type': 'application/json'});
	    return this.http.delete(this.baseUrl+uri, {headers});
	}

}
