export type Hair = {
    color: string;
    type: string;
}

export type Coordinates = {
    lat: number;
    lng: number;
}

export type Address = {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

export type Bank = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export type Coordinates2 = {
    lat: number;
    lng: number;
}

export type Address2 = {
    address: string;
    city: string;
    coordinates: Coordinates2;
    postalCode: string;
    state: string;
}

export type Company = {
    address: Address2;
    department: string;
    name: string;
    title: string;
}

export type User = {
    id: number | string;
    role?: string;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age?: number;
    gender?: string;
    email: string;
    phone?: string;
    username?: string;
    password?: string;
    birthDate?: string;
    image: string;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    eyeColor?: string;
    hair?: Hair;
    domain?: string;
    ip?: string;
    address?: Address;
    macAddress?: string;
    university?: string;
    bank?: Bank;
    company?: Company;
    ein?: string;
    ssn?: string;
    userAgent?: string;
}

export enum ActionType {
    InitiateData = 'INITIATE_DATA',
    AddUser = 'ADD_USER',
    UpdateUser = 'EDIT_USER',
    DeleteUser = 'DELETE_USER'
  }
  
export type InitiateData = {
    type: ActionType.InitiateData,
    payload: User[]
  }
export type AddUser = {
    type: ActionType.AddUser,
    payload: User
  }
export type UpdateUser = {
    type: ActionType.UpdateUser,
    payload: User
  }
export type DeleteUser = {
    type: ActionType.DeleteUser,
    payload: {id: string | number}
  }
  
export type ReducerActions = InitiateData | AddUser | UpdateUser | DeleteUser
  
export type ContextInitState = {
    page : number;
    state : User[],
    isLoading : boolean;
    dispatch : React.Dispatch<ReducerActions>;
    setPage : React.Dispatch<React.SetStateAction<number>>;
  }

  export type EditFormState = {
    open: boolean,
    id: number | string;
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    role?: string
  }