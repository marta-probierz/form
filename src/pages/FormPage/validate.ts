import * as Yup from "yup";
import { t } from "i18next";
import { correctPesel, correctNip } from "../../utils/validation";

export const SignupSchema = () =>
  Yup.object().shape({
    osobaFirma: Yup.string().required(t`validate.osobafirma`),
    pesel: Yup.string()
      .matches(/^[0-9]+$/, t`validate.numbers`)
      .min(11, t`validate.pesel`)
      .max(11, t`validate.pesel`)
      .test("test", t`validate.peselformat`, (pesel) => {
        if (typeof pesel === "string") return correctPesel(pesel);
        else if (typeof pesel === "undefined") return true;
        else return correctPesel(pesel);
      }),
    nip: Yup.string()
      .matches(/^[0-9]+$/, t`validate.numbers`)
      .min(10, t`validate.nip`)
      .max(10, t`validate.nip`)
      .test("test2", t`validate.nipformat`, (nip) => {
        if (typeof nip === "string") return correctNip(nip);
        if (typeof nip === "undefined") return true;
        else return correctNip(nip);
      }),
  });
