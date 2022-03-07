import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class WordleService {

  rapid_api_key!: string;

  constructor(private environment: AppConfigService, private http: HttpClient) {
    this.rapid_api_key = environment.config.RAPID_API_KEY;
  }

  getWordle() {
    const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom';

    const headers = 
      new HttpHeaders().set('Content-Type', 'application/json')
        .set('x-rapidapi-host', 'random-words5.p.rapidapi.com')
        .set('x-rapidapi-key', this.rapid_api_key);

    const myObject: any = { count: '5', wordLength: '5' };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

    const options = { params: new HttpParams(httpParams), headers: headers };

    return this.http.get<any>(url, options);
  }

  wordInDictionary(word:string) {
    const url = 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/';

    const headers = 
      new HttpHeaders().set('Content-Type', 'application/json')
        .set('x-rapidapi-host', 'twinword-word-graph-dictionary.p.rapidapi.com')
        .set('x-rapidapi-key', this.rapid_api_key);

    const myObject: any = { entry: word };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

    const options = { params: new HttpParams(httpParams), headers: headers };

    return this.http.get<any>(url, options);
  }
}
