export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public adress: string,
    public password: string,
  ){}
}
export class UserModel{
  constructor(public id: number|null ,
              public name: string ,
              public email: string |null,
              public address: string |null
  ) {

  }

}
