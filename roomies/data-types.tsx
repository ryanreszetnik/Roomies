export interface Group {
  id: string;
  name: string;
  members: User[];
  todos: Todo[];
  transactions: Transaction[];
  shoppingItems: ShoppingItem[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  groupId: string;
  quantity: string;
  bought: boolean;
  boughtBy: User;
}

export interface User {
  id: string;
  name: string;
}
export interface Transaction {
  id: string;
  amount: number;
  date: string;
  groupId: string;
  from: User;
  to: User;
  paid: boolean;
}

export interface Friend extends User {
  phoneNumber: string;
}
export interface Todo {
  id: string;
  name: string;
  done: boolean;
  assignedTo?: string;
}
