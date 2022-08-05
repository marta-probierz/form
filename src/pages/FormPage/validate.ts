import * as Yup from "yup";

export const SignupSchema = () =>
  Yup.object().shape({
    pesel: Yup.string()
      .matches(/^[0-9]+$/, "Wpisz wyłącznie cyfry")
      .min(11, "Wpisz dokładnie 11 cyfr")
      .max(11, "Wpisz dokładnie 11 cyfr"),
    nip: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
  });
