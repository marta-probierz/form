import * as Yup from "yup";

export const SignupSchema = () =>
  Yup.object().shape({
    pesel: Yup.string()
      .matches(/^[0-9]+$/, "Wpisz wyłącznie cyfry")
      .min(11, "Wpisz dokładnie 11 cyfr")
      .max(11, "Wpisz dokładnie 11 cyfr"),
    nip: Yup.string()
      .matches(/^[0-9]+$/, "Wpisz wyłącznie cyfry")
      .min(10, "Wpisz dokładnie 10 cyfr")
      .max(10, "Wpisz dokładnie 10 cyfr"),
  });
