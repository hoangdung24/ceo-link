// import parsePhoneNumber, { isPossiblePhoneNumber } from "libphonenumber-js";

export const formatPhoneNumber = (value: string) => {
  value = value.replace(/[^\d]/g, "");

  if (value.length === 0) return value;

  if (!value.startsWith("0")) {
    return `0${value}`;
  }

  if (/^0{2}/.test(value)) {
    return "0";
  }

  const [_, group1, group2, group3] = value.match(/(\d{0,4})(\d{0,3})(\d{0,3})/)!;

  return [group1, group2, group3].filter(Boolean).join(" ");
};
