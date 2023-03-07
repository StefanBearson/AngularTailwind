import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/sv';
import {Observable, of} from 'rxjs';

import { Cool } from '../models/cool.model'

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

@Injectable({providedIn: 'root'})
export class DataService {
  getData(): Observable<Cool[]> {
    return of(generateManyCool(10))
  }
}
