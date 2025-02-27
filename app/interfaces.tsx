export interface Owner {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface Dog {
  name: string;
  sex: string;
  breed: string;
  img: string;
  age: number;
  chipNumber: string;
  owner: Owner;
  present: boolean;
}
