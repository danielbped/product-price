import { FormEvent } from "react";
import Button from "../Button";
import Table from "../Table";
import { IForm } from "../../interfaces";
import { StyledFileName, StyledForm, StyledRemoveFileButton, StyledFileField } from "./style";
import { CgTrashEmpty } from "react-icons/cg"

const Form = (props: IForm): JSX.Element => {
  return (
    <StyledForm id="form">
      <input
        type="file"
        accept=".csv"
        id="file-input"
        style={{ display: "none" }}
        onChange={props.handleOnChange}
      />
      <div>
        <Button
          onClick={(e: FormEvent<HTMLButtonElement>) => props.handleOnSubmit(e)}
          name="Importar Arquivo"
          className="import"
        />
        { (props.file && !props.validProducts) && <Button
          onClick={(e) => props.handleFile(e)}
          disabled={ props.file === null }
          name="Validar Arquivo"
          className="validate"
        /> }
        { (props.validProducts
          && props.file)
          && <Button
          name="Atualizar Produtos"
          className="update"
          onClick={(e) => props.handleUpdateProducts(e)}
        /> }
      </div>
      {props.file
        && <StyledFileField>
        <StyledFileName>{ props.file?.name }</StyledFileName>
        <StyledRemoveFileButton
          onClick={ () => props.removeFile() }
        >
          <CgTrashEmpty />
        </StyledRemoveFileButton>
      </StyledFileField> }
      <Table
        error={ props.errors }
        products={ props.updateProducts }
      />
    </StyledForm>
  )
}

export default Form;