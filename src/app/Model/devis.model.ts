// Long demand_id;
// float price;
// Date date;

export  class DevisModel{
  constructor(public id:number|null,
              public demand_id:number|null,
              public status:String,
              public  price:number,
              public date:Date) {
  }
}
