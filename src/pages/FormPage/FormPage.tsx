import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import { Formik, Form } from "formik";

import { paths } from "../../config/paths";
import { Button, Input, Radio } from "../../components";
import { PageContainer } from "../../styles";
import { FormContainer, RadioContainer, PhotoContainer, PhotoInput, Img } from "./FormPage.style";

export const FormPage = () => {
  const { t } = useTranslation();
  const [img, setImg] = useState("");
  const [selectedType, setSelectedType] = useState<String>();

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <PageContainer>
      <FormContainer>
        <Input for="name" label={t`form.input.name`} type="text" name="name" id="name" />
        <Input for="lastname" label={t`form.input.lastname`} type="text" name="lastname" id="lastname" />

        <RadioContainer>
          <Radio
            for="osoba"
            label={t`form.input.osoba`}
            type="radio"
            name="osobaFirma"
            id="osoba"
            value="osoba"
            onChange={radioHandler}
          />
          <Radio
            for="firma"
            label={t`form.input.firma`}
            type="radio"
            name="osobaFirma"
            id="firma"
            value="firma"
            onChange={radioHandler}
          />
        </RadioContainer>

        {selectedType === "osoba" ? (
          <Input for="peselNip" label={t`form.input.pesel`} type="number" name="peselNip" id="peselNip" />
        ) : selectedType === "firma" ? (
          <Input for="peselNip" label={t`form.input.nip`} type="number" name="peselNip" id="peselNip" />
        ) : (
          <Input for="peselNip" label={t`form.input.peselnip`} type="number" name="peselNip" id="peselNip" />
        )}

        <PhotoContainer>
          {img !== "" ? <Img src={img} alt="addedPhoto" /> : null}
          <PhotoInput type="file" onChange={onImageChange} />
        </PhotoContainer>

        <Button url={paths.addContractor} label={t`form.button`} />
      </FormContainer>
    </PageContainer>
  );
};
