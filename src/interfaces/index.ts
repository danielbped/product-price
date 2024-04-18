import { ChangeEvent, FormEvent } from "react";

export interface CSVObject {
  [key: string]: string;
}

export interface Product {
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
  products: Product[],
  error?: UpdateErrorResponse | null;
}

export interface IForm {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
  updateProducts: Product[],
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