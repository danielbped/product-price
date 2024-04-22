import { ChangeEvent, FormEvent } from "react";

export interface CSVObject {
  [key: string]: string;
}

export interface Product {
  code: number
  name: string
  sales_price: number
  cost_price: number
}

export interface IItemField {
  value: string | number
  label: string
  fullWidth?: boolean
}

export interface IProductList {
  data: Product[]
}

export interface IPackList {
  data: Pack[]
}

export interface IProductItem {
  product: Product
}

export interface IPackItem {
  pack: Pack
}

export interface Pack {
  product: Product
  qty: number
  value: number
}

export interface ProductToUpdate {
  code: number;
  name: string;
  sales_price: number;
  new_sales_price: number;
}

export interface UpdateError {
  code: number;
  message: string;
}

export interface UpdateErrorResponse {
  message: string;
  errors: UpdateError[]
}

export interface ITable {
  products: ProductToUpdate[],
  error?: UpdateErrorResponse | null;
}

export interface IAlertModal {
  message?: string,
  onClick: () => void,
  className?: string,
}

export interface IForm {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
  updateProducts: ProductToUpdate[],
  handleOnSubmit: (e: FormEvent<HTMLButtonElement>) => void,
  handleUpdateProducts: (e: FormEvent<HTMLButtonElement>) => void,
  file: File | null,
  removeFile: () => void,
  handleFile: (e: FormEvent<HTMLButtonElement>) => void,
  validProducts: boolean,
  errors: UpdateErrorResponse | null
}

export interface IButton {
  onClick: (e: FormEvent<HTMLButtonElement>) => void,
  name: string,
  disabled?: boolean,
  className?: string
}