import * as Yup from "yup";
import { t } from "i18next";

export const SignupSchema = () =>
  Yup.object().shape({
    osobaFirma: Yup.string().required(t`validate.osobafirma`),
    pesel: Yup.string()
      .matches(/^[0-9]+$/, t`validate.numbers`)
      .min(11, t`validate.pesel`)
      .max(11, t`validate.pesel`)
      .default("")
      .test("correct-pesel", t`validate.peselformat`, (pesel) => {
        var reg = /^[0-9]{11}$/;
        if (reg.test(pesel) === false) return false;
        else {
          var digits = ("" + pesel).split("");
          if (parseInt(pesel.substring(4, 6)) > 31 || parseInt(pesel.substring(2, 4)) > 12) return false;

          var checksum =
            (1 * parseInt(digits[0]) +
              3 * parseInt(digits[1]) +
              7 * parseInt(digits[2]) +
              9 * parseInt(digits[3]) +
              1 * parseInt(digits[4]) +
              3 * parseInt(digits[5]) +
              7 * parseInt(digits[6]) +
              9 * parseInt(digits[7]) +
              1 * parseInt(digits[8]) +
              3 * parseInt(digits[9])) %
            10;
          if (checksum === 0) checksum = 10;
          checksum = 10 - checksum;

          return parseInt(digits[10]) === checksum;
        }
      }),
    nip: Yup.string()
      .matches(/^[0-9]+$/, t`validate.numbers`)
      .min(10, t`validate.nip`)
      .max(10, t`validate.nip`)
      .default("")
      .test("correct-nip", t`validate.nipformat`, (nip) => {
        let nipWithoutDashes = nip.replace(/-/g, "");
        let reg = /^[0-9]{10}$/;
        if (reg.test(nipWithoutDashes) === false) {
          return false;
        } else {
          let digits = ("" + nipWithoutDashes).split("");
          let checksum =
            (6 * parseInt(digits[0]) +
              5 * parseInt(digits[1]) +
              7 * parseInt(digits[2]) +
              2 * parseInt(digits[3]) +
              3 * parseInt(digits[4]) +
              4 * parseInt(digits[5]) +
              5 * parseInt(digits[6]) +
              6 * parseInt(digits[7]) +
              7 * parseInt(digits[8])) %
            11;

          return parseInt(digits[9]) === checksum;
        }
      }),
  });
