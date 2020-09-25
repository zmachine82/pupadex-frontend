export class NewUser {
    first_name: string;
    last_name: string;
    email: string;
    nickname: string;
    password: string;
    password_confirmation: string;

    constructor(value: any) {
        this.first_name = value.firstName;
        this.last_name = value.lastName;
        this.email = value.email;
        this.nickname = value.nickname;
        this.password = value.password;
        this.password_confirmation = value.passwordConfirmation;
    }
}