import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface CSVObject {
  [key: string]: string;
}

interface Product {
  code: number;
  name: string;
  sales_price: number;
  new_sales_price: number;
}

interface Error {
  message: string;
  errors: {
    code: number;
    message: string;
  }[]
}

function App(): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const [array, setArray] = useState<CSVObject[]>([]);
  const [updateProducts, setUpdateProducts] = useState<Product[]>([]);
  const [errors, setErrors] = useState<Error | null>(null);
  
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
    
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
      setUpdateProducts(response.data)
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
        {(errors && errors.errors?.length) ? <div>
          <p>{ errors.message }</p>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Erro</th>
              </tr>
            </thead>
            <tbody>
              { errors.errors?.map((error) => (
                <tr key={error.code}>
                  <td>{ error.code }</td>
                  <td>{ error.message }</td>
                </tr>
              )) }
            </tbody>
          </table>
        </div> : null}
        {updateProducts.length ? <div>
          <p>Produtos Válidos</p>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Novo valor</th>
              </tr>
            </thead>
            <tbody>
              { updateProducts.map((product) => (
                <tr key={product.code}>
                  <td>{ product.code }</td>
                  <td>{ product.name }</td>
                  <td>{ product.sales_price }</td>
                  <td>{ product.new_sales_price }</td>
                </tr>
              )) }
            </tbody>
          </table>

          <button onClick={(e) => handleUpdateProducts(e)}>Atualizar Produtos</button>
        </div> : null}
      </form>
    </div>
  );
}

export default App;
