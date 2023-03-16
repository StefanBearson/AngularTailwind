import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/sv';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Cool } from '../models/cool.model'

class Complaints {
  complaint!: string;
  count!: number;
}

export class ComplaintsWithPercent {
  complaint!: string;
  count!: number;
  cumulativePercent!: number;
}

export class Alignment {
  icon!: string;
  alignment!: string;
  hint!: string;
}

export class PostRes{
  props!: Posts[];
}

export class Posts {
  slug!: string;
  frontmatter!: Frontmatter
  content!: string;
}

export class Frontmatter {
  title!: string;
  author!: string;
  category!: string;
  date!: string;
  bannerImage!: string;
  tags!: string[];
}

function generateManyCool(items: number) : Cool[]{

  let coolThings: Cool[] = [];

  for (let index = 0; index < items; index++) {
    coolThings.push({
      name: faker.name.firstName(),
      phone: faker.phone.number(),
      address: faker.address.street(),
      city: faker.address.cityName()
    })
  }
  return coolThings
}

const complaintsData: Complaints[] = [
  { complaint: 'Stefan', count: 12000 },
  { complaint: 'Kalle', count: 15000 },
  { complaint: 'Musse', count: 8500 },
  { complaint: 'Sture', count: 9700 },
  { complaint: 'Lisa', count: 14700 },
  { complaint: 'Anna', count: 9000 },
  { complaint: 'Ola', count: 20000 },
];

const alignments: Alignment[] = [
  {
    icon: 'alignleft',
    alignment: 'left',
    hint: 'Align left',
  },
  {
    icon: 'aligncenter',
    alignment: 'center',
    hint: 'Center',
  },
  {
    icon: 'alignright',
    alignment: 'right',
    hint: 'Align right',
  },
  {
    icon: 'alignjustify',
    alignment: 'justify',
    hint: 'Justify',
  },
];
@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http : HttpClient) {

  }



  getData(): Observable<Cool[]> {
    return of(generateManyCool(10))
  }

  getComplaintsData(): ComplaintsWithPercent[] {
    const data = complaintsData.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;
    return data.map((item, index) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent: Math.round(cumulativeCount * 100 / totalCount),
      };
    });
  }

  // getAllBlogs(): Observable<HttpResponse<PostRes>> {
  //   return this.http.get<PostRes>("http://localhost:3001", {observe: 'response'});

  // }
  getAllBlogs() {
    return this.http
      .get<Posts[]>("http://localhost:3001")

  }

  getBlogPost(slug: string) {
    console.log("getAllBlogs runs", slug);
    return this.http
      .get<Posts>("http://localhost:3001/post/" + slug)

  }

  postBlogPost(post: Posts){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    console.log("test");
    return this.http
      .post<Posts>('http://localhost:3001', post, options)
      .pipe(catchError(this.handleError));
  }

  postImage(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http
      .post<File>('http://localhost:3001/postImage', formData)
      .pipe(catchError(this.handleError));
  }



  getAlignments() : Alignment[] {
    return alignments;
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}


