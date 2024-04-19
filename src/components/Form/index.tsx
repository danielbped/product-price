import { FormEvent } from "react";
import Button from "../Button";
import Table from "../Table";
import { IForm } from "../../interfaces";
import { StyledFileName, StyledForm, StyledRemoveFileButton, StyledFileField } from "./style";
import { CgTrashEmpty } from "react-icons/cg"
import { FormButtonClassName, FormButtonName } from "../../enums";

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
          name={ FormButtonName.IMPORT }
          className={ FormButtonClassName.IMPORT }
        />
        { (props.file && !props.validProducts) && <Button
          onClick={(e) => props.handleFile(e)}
          disabled={ props.file === null }
          name={ FormButtonName.VALIDATE }
          className={ FormButtonClassName.VALIDATE }
        /> }
        { (props.validProducts
          && props.file)
          && <Button
          name={ FormButtonName.UPDATE }
          className={ FormButtonName.UPDATE }
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