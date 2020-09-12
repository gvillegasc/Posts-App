import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url_base: string = environment.URL_BASE;
  app_id: string = environment.APP_ID;
  constructor(private http: HttpClient) {}

  loadPosts() {
    console.log(this.url_base);
    console.log(this.app_id);
    let url = this.url_base + '/post';
    return this.http
      .get(url, {
        headers: {
          'app-id': this.app_id,
        },
      })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  loadComments(id: String) {
    let url = this.url_base + '/post/' + id + '/comment';
    return this.http
      .get(url, {
        headers: {
          'app-id': this.app_id,
        },
      })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }
}
