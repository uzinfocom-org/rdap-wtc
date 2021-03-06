export interface Row {
  iIndex: number;
  sName: string;
  dtExpired: Date;
  dtRegistered: Date;
  lastUpd: Date;
  sDesc: string | null;
  lWhois: number;
  dbStatus: string;
  CustomerName: string;
  CustomerOrg: string;
  CustomerPhone: string;
  CustomerFax: string;
  CustomerEmail: string;
  CustomerState: string;
  CustomerCountry: string;
  CustomerCity: string;
  CustomerAddress: string;
  Type: string;
  CustomerPost: string;
  AdminName: string;
  AdminOrg: string;
  AdminPhone: string;
  AdminFax: string;
  AdminEmail: string;
  AdminState: string;
  AdminCountry: string;
  AdminCity: string;
  AdminAddress: string;
  AdminPost: string;
  TechName: string;
  TechOrg: string;
  TechPhone: string;
  TechFax: string;
  TechEmail: string;
  TechState: string;
  TechCountry: string;
  TechCity: string;
  TechAddress: string;
  TechPost: string;
  BillName: string;
  BillOrg: string;
  BillPhone: string;
  BillFax: string;
  BillEmail: string;
  BillState: string;
  BillCountry: string;
  BillCity: string;
  BillAddress: string;
  BillPost: string;
  dns1: string;
  ip1: string;
  dns2: string;
  ip2: string;
  dns3: string;
  ip3: string;
  dns4: string;
  ip4: string;
  RegistrarOrg: string | null;
  RegistrarID: string | null;
}
