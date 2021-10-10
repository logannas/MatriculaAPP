import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Marty McFly",
    "profilePic": "assets/img/marty-avatar.png",
    "matricula": "170006131"
  };


  constructor() {
    let items = [
      {
        "name": "Marty McFly",
        "profilePic": "assets/img/marty-avatar.png",
        "about": "170006131",
        "matricula": "170006131",
        "curso": "ENGENHARIA DE REDES DE COMUNICAÇÃO/ENE - Bacharel - MT",
        "nivel": "Graduação",
        "status": "Ativo",
        "email": "martyMc@unb.br",
        "entrada": "2017.1",
        "ira": 5

      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
