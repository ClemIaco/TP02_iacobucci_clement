export class Client {
    name: string
    firstname: string
    address: string
    postalCode: string
    city: string
    country: string
    phoneNumber: string
    email: string
    civility: string
    login: string
    passwd: string

    constructor(name: string, firstname: string, address: string, postalCode: string, city: string, country: string, phoneNumber: string, email: string, civility: string, login: string, passwd: string){
        this.name = name;
        this.firstname = firstname;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.civility = civility;
        this.login = login;
        this.passwd = passwd;
    }
}
