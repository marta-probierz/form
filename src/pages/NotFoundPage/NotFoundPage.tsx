import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { paths } from "../../config/paths";
import { PageContainer } from "../../styles";
import { Button } from "../../components";
import { FormContainer } from "../FormPage/FormPage.style";
import { Header, Number404 } from "./NotFoundPage.style";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <FormContainer>
        <Number404>{t`notfound.404`}</Number404>
        <Header>{t`notfound.notfound`}</Header>
        <Link to={paths.form}>
          <Button label={t`notfound.button`} />
        </Link>
      </FormContainer>
    </PageContainer>
  );
};
