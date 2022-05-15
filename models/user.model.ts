

type UserModel = {
    name:string;
    email:string;
    number:string;
    password:string;
    repeatPassword: string;
    acceptTerms: boolean;
    notify:boolean;
  };

export default UserModel;