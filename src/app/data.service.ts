import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getUsers() {
    return [
      { id: 1, name: 'mohammed' },
      { id: 2, name: 'ahmed' },
      { id: 3, name: 'ali' },
      { id: 4, name: 'ghada' },
      { id: 5, name: 'kholoud' }
    ];
  }

}
