export interface Address {
  id: string;
  name: string;
  type: "HOME" | "OFFICE";
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

export const addresses: Address[] = [
  {
    id: "address1",
    name: "2118 Thornridge",
    type: "HOME",
    street: "2118 Thornridge Cir.",
    city: "Syracuse",
    state: "Connecticut",
    zip: "35624",
    phone: "(209) 555-0104",
  },
  {
    id: "address2",
    name: "Headoffice",
    type: "OFFICE",
    street: "2715 Ash Dr.",
    city: "San Jose",
    state: "South Dakota",
    zip: "83475",
    phone: "(704) 555-0127",
  },
];
