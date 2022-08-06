import axios from "../axios/instanceAxios";

const ADDCONTRACTOR_URL = "/Contractor/Save";

export const addcontractor = (
  name: string,
  lastname: string,
  osobaFirma: string,
  file: string,
  pesel: string,
  nip: string,
) => {
  return axios
    .post(ADDCONTRACTOR_URL, {
      name,
      lastname,
      osobaFirma,
      file,
      pesel,
      nip,
    })
    .then((res) => {
      return res.data;
    });
};
