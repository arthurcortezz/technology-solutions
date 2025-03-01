export interface UserJWTInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf?: string;
  roleId: number;
  role: RoleInterface;
  menus: MenuInterface[];
  privileges: { key: string }[];
  createdAt: Date;
}

export interface RoleInterface {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface MenuInterface {
  menu: string;
  icon: string;
  route: string;
  menuKey: string;
}
