export const correctPesel = (pesel: string) => {
  if (typeof pesel !== "string") return false;
  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  let controlNumber = parseInt(pesel.substring(10, 11));

  for (let i = 0; i < weight.length; i++) {
    sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
  }
  sum = sum % 10;
  return (10 - sum) % 10 === controlNumber;
};

export const correctNip = (nip: string) => {
  if (typeof nip !== "string") return false;
  // eslint-disable-next-line
  nip = nip.replace(/[\ \-]/gi, "");

  let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let sum = 0;
  let controlNumber = parseInt(nip.substring(9, 10));
  let weightCount = weight.length;
  for (let i = 0; i < weightCount; i++) {
    sum += parseInt(nip.substr(i, 1)) * weight[i];
  }

  return sum % 11 === controlNumber;
};
