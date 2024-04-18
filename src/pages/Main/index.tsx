import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Table from "../../components/Table";

interface CSVObject {
  [key: string]: string;
}

export interface Product {
  code: number;
  name: string;
  sales_price: number;
  new_sales_price: number;
}

export interface UpdateError {
  message: string;
  errors: {
    code: number;
    message: string;
  }[]
}

const Main = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [array, setArray] = useState<CSVObject[]>([]);
  const [updateProducts, setUpdateProducts] = useState<Product[]>([]);
  const [errors, setErrors] = useState<UpdateError | null>(null);
  const [validProducts, setValidProducts] = useState<boolean>(false)
  
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const csvFileToArray = (string: string): CSVObject[] => {
    const [header, ...rows] = string.split("\n");
    const csvHeader = header.split(",");
    const newArray: CSVObject[] = rows.map((row) =>
      row.split(",").reduce((acc, curr, index) => {
        acc[csvHeader[index].trim()] = curr.trim();
        return acc;
      }, {} as CSVObject)
    );

    return newArray;
  };

  const removeFile = () => {
    setFile(null);
    setErrors(null);
    setUpdateProducts([]);

    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  }

  const handleOnSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    document.getElementById("file-input")?.click();
  };

  const handleArray = (array: CSVObject[]) => array.map((item) => ({
    code: Number(item.product_code),
    sales_price: Number(item.new_price)
  }))

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        if (event?.target?.result) {
          const text = event.target.result as string;
          const newArray = csvFileToArray(text);
          setArray(newArray);
        }
      };

      fileReader.readAsText(file);
    }
  }, [file])

  const handleFile = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    const body = {
      products: handleArray(array)
    };

    try {
      const response = await axios.post('http://localhost:3000/product/validate', body);
      setUpdateProducts(response.data);
      setValidProducts(true);
    } catch (err: unknown) {
      console.error(err);
      setErrors(err.response.data);
    }
  };

  const handleUpdateProducts = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    const body = {
      products: handleArray(array)
    };

    try {
      const response = await axios.put('http://localhost:3000/product', body);

      if (response.status === 200) {
        removeFile();
        setValidProducts(false);
        window.alert('Produtos atualizados')
      }

    } catch (err: unknown) {
      console.error(err);
      setErrors(err.response.data);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Atualizar Produtos</h1>
      <form id="form">
        <input
          type="file"
          accept=".csv"
          id="file-input"
          style={{ display: "none" }}
          onChange={handleOnChange}
        />
        <button onClick={(e) => handleOnSubmit(e)}>Importar Arquivo</button>
        <div>
          <p>{ file?.name }</p>
          { file && <button onClick={ () => removeFile() }>X</button> }
        </div>
        <button onClick={(e) => handleFile(e)} disabled={ file === null }>Validar Arquivo</button>
        <Table
          error={ errors }
          products={ updateProducts }
        />
        {validProducts && <button onClick={(e) => handleUpdateProducts(e)}>Atualizar Produtos</button> }
      </form>
    </div>
  );
};

export default Main;
