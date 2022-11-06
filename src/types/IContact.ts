export type IContact = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  favorite: boolean;
  owner: string;
  createdAt: string;
  updatedAt: string;
};

export type IContactToServer = {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
};
