import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/sv';
import {Observable, of} from 'rxjs';

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
  { complaint: 'Cold pizza', count: 780 },
  { complaint: 'Not enough cheese', count: 120 },
  { complaint: 'Underbaked or Overbaked', count: 52 },
  { complaint: 'Delayed delivery', count: 1123 },
  { complaint: 'Damaged pizza', count: 321 },
  { complaint: 'Incorrect billing', count: 89 },
  { complaint: 'Wrong size delivered', count: 222 },
];


@Injectable({providedIn: 'root'})
export class DataService {
  
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
}
