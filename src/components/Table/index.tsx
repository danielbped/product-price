import { UpdateError, Product } from "../../pages/Main";

interface ITable {
  products: Product[],
  error?: UpdateError | null;
}

const Table = ({ products, error }: ITable): JSX.Element => {
  const errorHeaders = ['Código', 'Erro'];
  const productHeaders = ['Código', 'Nome', 'Valor', 'Novo valor'];

  const items = products || error?.errors;

  const headers = error ? errorHeaders : productHeaders;

  return (
    <div>
      {error && <p>{ error.message  }</p>}
      { items.length > 0 && <table>
        <thead>
          <tr>
            { headers.map((header) => (
              <th>{ header }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { items?.map((error) => (
              <tr>
                { Object.values(error).map((item) => <td>{ item }</td>) }
              </tr>
            ))}
        </tbody>
      </table> }
    </div>
  )
}

export default Table;