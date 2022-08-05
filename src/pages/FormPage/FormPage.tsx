import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import IForm from "./Form.interface";
import { SignupSchema } from "./validate";
// import { paths } from "../../config/paths";
import { Button, Input, Radio } from "../../components";
import { PageContainer, WarningIcon } from "../../styles";
import { FormContainer, RadioContainer, PhotoContainer, PhotoInput, Img, ErrorMsg } from "./FormPage.style";

export const FormPage = () => {
  const { t } = useTranslation();
  // let navigate = useNavigate();
  const [img, setImg] = useState("");
  const [selectedType, setSelectedType] = useState<String>();

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const initialValues: IForm = {
    name: "",
    lastname: "",
    osobaFirma: "",
    file: "",
    pesel: "",
    nip: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema()}
      onSubmit={(values: IForm) => {
        let data = {
          name: values.name,
          lastname: values.lastname,
          osobaFirma: values.osobaFirma,
          file: values.file,
          pesel: values.pesel,
          nip: values.nip,
        };
        const url = `https://localhost:60001/Contractor/Save`;
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(data);
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <PageContainer>
            <FormContainer>
              <Input
                for="name"
                label={t`form.input.name`}
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
              />

              <Input
                for="lastname"
                label={t`form.input.lastname`}
                type="text"
                name="lastname"
                id="lastname"
                value={values.lastname}
                onChange={handleChange}
              />

              <RadioContainer>
                <Radio
                  for="osoba"
                  label={t`form.input.osoba`}
                  type="radio"
                  name="osobaFirma"
                  id="osoba"
                  value="osoba"
                  onChange={(e) => {
                    handleChange(e);
                    radioHandler(e);
                  }}
                />

                <Radio
                  for="firma"
                  label={t`form.input.firma`}
                  type="radio"
                  name="osobaFirma"
                  id="firma"
                  value="firma"
                  onChange={(e) => {
                    handleChange(e);
                    radioHandler(e);
                  }}
                />
              </RadioContainer>

              {selectedType === "osoba" ? (
                <>
                  <Input
                    for="pesel"
                    label={t`form.input.pesel`}
                    type="text"
                    name="pesel"
                    id="pesel"
                    value={values.pesel !== undefined ? values.pesel : ""}
                    onChange={handleChange}
                    className={errors.pesel && touched.pesel ? "invalid" : ""}
                  />
                  <WarningIcon className={errors.pesel && touched.pesel ? "invalid" : ""} />
                  <ErrorMsg>{errors.pesel && touched.pesel && errors.pesel}</ErrorMsg>
                </>
              ) : selectedType === "firma" ? (
                <>
                  <Input
                    for="nip"
                    label={t`form.input.nip`}
                    type="text"
                    name="nip"
                    id="nip"
                    value={values.nip !== undefined ? values.nip : ""}
                    onChange={handleChange}
                    className={errors.nip && touched.nip ? "invalid" : ""}
                  />
                  <WarningIcon className={errors.nip && touched.nip ? "invalid" : ""} />
                  <ErrorMsg>{errors.nip && touched.nip && errors.nip}</ErrorMsg>
                </>
              ) : null}

              <PhotoContainer>
                {img !== "" ? <Img src={img} alt="addedPhoto" /> : null}
                <PhotoInput
                  type="file"
                  id="file"
                  name="file"
                  onChange={(e) => {
                    handleChange(e);
                    onImageChange(e);
                  }}
                  value={values.file}
                />
              </PhotoContainer>

              {/* <Link to={paths.addContractor}> */}
              <Button type="submit" label={t`form.button`} />
              {/* </Link> */}
            </FormContainer>
          </PageContainer>
        </Form>
      )}
    </Formik>
  );
};
