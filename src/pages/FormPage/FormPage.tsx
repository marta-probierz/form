import React from "react";
import { useTranslation } from "react-i18next";

import { paths } from "../../config/paths";
import { Button, Input } from "../../components";

export const FormPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Button url={paths.addContractor} label={t`home.button`} />
      <Input for="name" label="Imię" type="text" name="name" id="name"/>
    </>
  );
};
