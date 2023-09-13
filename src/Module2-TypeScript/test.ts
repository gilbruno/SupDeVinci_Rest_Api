

let myArray : (string | number)[] = ['1', '2']
myArray.push(3)



let pi:3.14 = 3.14
//pi = 3.145


let fruit : "banana" | "mango"
//fruit = 'apple'


let tuple: [number, string, boolean]
//tuple = [6, true, false]
tuple = [6, "true", false]


let rgb: [number, number, number]
rgb = [111, 59, 253]


enum Color {
    RED = 'rouge',
    GREEN = 'vert',
    YELLOW = 'jaune',
    PINK = 'rose'
}

const myCarColor: Color = Color.GREEN

// interface User {
//     id: Number,
//     name: string,
//     email: string,
//     devWith(): string
// }

// interface Admin extends User {
//     role: "admin" | "db_admin"
// }

// let me : Admin = {
//     id:1,
//     name: 'John',
//     email: 'john@gmail.com',
//     role: 'admin',
//     devWith: () => "TypeScript"
// }


// class User {
//     private _driverLicensePoints: number = 1

//     readonly city:string
//     constructor(public email: string, private name: string) {
//         this.email = email
//         this.name = name
//     }

//     get driverLicensePoints(): number {
//         return this._driverLicensePoints
//     }

//     set driverLicensePoints(driverLicensePoints: number) {
//         this._driverLicensePoints = driverLicensePoints
//     }
// }

class User {
    protected _driverLicensePoints: number = 1

    readonly city:string
    constructor(public email: string, private name: string) {
        this.email = email
        this.name = name
    }

    get driverLicensePoints(): number {
        return this._driverLicensePoints
    }

    set driverLicensePoints(driverLicensePoints: number) {
        this._driverLicensePoints = driverLicensePoints
    }
}

class SubUser extends User {

    updateDriverLicensePoints(points: number) {
        this._driverLicensePoints = points
    }
}


let me = new User("john@doe.com", "John Doe")

// me.city = 'San Juan Del Sur'


abstract class TakePhoto {
    constructor(
        public type: string, 
        public filter: string) {
    }

    getSepiaFilter(): string {
        return 'Sepia'
    }
}

class Instagram extends TakePhoto {
    constructor(
        public type: string, 
        public filter: string) {
            super(type, filter)
    }
}

let myInstagram = new Instagram('Reel', 'Mayfair')
myInstagram.getSepiaFilter()


