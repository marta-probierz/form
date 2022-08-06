import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { paths } from "../../config/paths";
import { PageContainer } from "../../styles";
import { Button } from "../../components";
import { FormContainer } from "../FormPage/FormPage.style";

export const AddContractorPage = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <FormContainer>
        <Link to={paths.form}>
          <Button label={t`addcontractor.button`} />
        </Link>
      </FormContainer>
    </PageContainer>
  );
};
