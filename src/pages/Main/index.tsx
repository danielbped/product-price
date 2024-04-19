import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Form from "../../components/Form";
import { CSVObject, IAlertModal, Product, UpdateErrorResponse } from "../../interfaces";
import csvFileToArray from "../../helpers/csvFileToArray";
import { StyledHeader, StyledMain } from "./styles";
import AlertModal from "../../components/AlertModal";
import { ModalMessage, ModalType } from "../../enums";

const Main = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [array, setArray] = useState<CSVObject[]>([]);
  const [updateProducts, setUpdateProducts] = useState<Product[]>([]);
  const [errors, setErrors] = useState<UpdateErrorResponse | null>(null);
  const [validProducts, setValidProducts] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modal, setModal] = useState<Partial<IAlertModal> | null>(null);
  
  const CLOSE_MODAL_TIME = 5000;

  const { VITE_API_URL } = import.meta.env;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setShowModal(false), CLOSE_MODAL_TIME);
    }
  }, [showModal])

  const removeFile = () => {
    setFile(null);
    setErrors(null);
    setUpdateProducts([]);
    setValidProducts(false);

    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  }

  const handleOnSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    document.getElementById("file-input")?.click();
  };

  const handleShowModal = (message: string, error?: boolean) => {
    setShowModal(true);
    const className = error ? ModalType.ERROR : ModalType.SUCCESS;
    setModal({ message, className });
  }

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
      const response = await axios.post(`${VITE_API_URL}/product/validate`, body);
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
      const response = await axios.put(`${VITE_API_URL}/product`, body);

      if (response.status === 200) {
        removeFile();
        setValidProducts(false);
        handleShowModal(ModalMessage.SUCCESS);
      }
    } catch (err: unknown) {
      console.error(err);
      handleShowModal(ModalMessage.ERROR, true);
    }
  };

  return (
    <StyledMain>
      <StyledHeader>Atualizar Produtos</StyledHeader>
      <Form
        handleOnChange={ handleOnChange }
        updateProducts={ updateProducts }
        handleOnSubmit={ handleOnSubmit }
        handleUpdateProducts={ handleUpdateProducts }
        file={ file }
        removeFile={ removeFile }
        handleFile={ handleFile }
        validProducts={ validProducts }
        errors={ errors }
      />
      { showModal && modal && <AlertModal
        message={modal.message}
        className={modal?.className}
        onClick={ () => setShowModal(false) }
      /> }
    </StyledMain>
  );
};

export default Main;
