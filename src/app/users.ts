export class Users {
    id: number = 0;
    username: string = '';
    password: string = '';
    email: string = '';
    firstname: string = '';
    lastname: string = '';
    phone: string = '';
    isReviewer: boolean = false;
    role: string[] = ['Employee','Manager','Admin'];
    isAdmin: boolean = false;
    active: boolean = false;
}
