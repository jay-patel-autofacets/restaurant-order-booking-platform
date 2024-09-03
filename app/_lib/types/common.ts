export enum TENANT_TYPE {
  RESTAURANT = "RESTAURANT",
}

export interface IItem {
  image: string;
  name: string;
  price: number;
  currency: string;
  description: string;
}
export interface ICategory {
  type: string;
  items: IItem[];
}

export interface IMain {
  meta: {
    type: TENANT_TYPE;
  };
  data: {
    info: {
      name: string;
      image: string;
    };
    menu: {
      catagories: ICategory[];
    };
  };
}
export interface IOrder {
  [key: string]: {
    item: Pick<IItem, "name" | "price" | "currency">;
    count: number;
  }[];
}
