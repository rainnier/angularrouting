import { environment } from './../environments/environment.prod';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaggedTemplateExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getBlogs(): Observable<{title:string, description:string}> {
    return this.http.get(`${environment.url}/blogs`).pipe(tap((data:any) => data))
  }

}
