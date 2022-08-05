import { useState } from "react";
import { useTranslation } from "react-i18next";

import { paths } from "../../config/paths";
import { Button, Input, Radio } from "../../components";
import { PageContainer } from "../../styles";
import { FormContainer, RadioContainer, Img } from "./FormPage.style";

export const FormPage = () => {
  const { t } = useTranslation();
  const [img, setImg] = useState("");

  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <PageContainer>
      <FormContainer>
        <Input for="name" label="Imię" type="text" name="name" id="name" />
        <Input for="name" label="Imię" type="text" name="name" id="name" />
        
        <RadioContainer>
          <Radio for="osoba" label="Osoba" type="radio" name="osobaFirma" id="osoba" value="osoba" />
          <Radio for="firma" label="Firma" type="radio" name="osobaFirma" id="firma" value="firma" />
        </RadioContainer>
        <Input for="name" label="Imię" type="text" name="name" id="name" />
        <div>
          <Img src={img} alt="" />
          <input type="file" onChange={onImageChange} />
        </div>
        <Button url={paths.addContractor} label={t`home.button`} />
      </FormContainer>
    </PageContainer>
  );
};
