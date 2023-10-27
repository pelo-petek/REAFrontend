

export class User{
  id?: number;
  fullName: string="";
  userName: string="";
  passwordSalt: string="";
  email: string="";
  userType?: UserType;


}
export enum UserType {
    Admin,
    Teacher,
  }
