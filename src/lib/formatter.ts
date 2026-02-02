import parsePhoneNumber from "libphonenumber-js";

export const formatPhoneNumber = (value: string) => {
  try {
    value = value.replace(/[^\d]/g, "");

    if (value.length === 0) return value;

    if (!value.startsWith("0")) {
      return `0${value}`;
    }

    // if (value.length > 1) {
    //   value = `${value[0]}${value.slice(1).replace(/\+/g, "")}`;
    // }

    const phoneNumber = parsePhoneNumber(value, "VI");
    console.log("🚀 ~ formatPhoneNumber ~ phoneNumber:", phoneNumber);

    if (phoneNumber == undefined) return value;

    value = phoneNumber.nationalNumber;

    // if (!value.startsWith("0") && !value.startsWith("+")) {
    //   value = `0${value}`;
    // }

    console.log(value);

    const [_, group1, group2, group3] = `${phoneNumber.nationalNumber}`.match(
      /(\d{0,4})(\d{0,3})(\d{0,3})/
    )!;

    console.log(group1, group2, group3);

    return [group1, group2, group3].filter(Boolean).join(" ");
  } catch (e) {
    return value;
  }
};
