const ADDescriptionCodes = [
  { code: "1", value: "SCRIPT" },
  { code: "2", value: "ACCOUNTDISABLE" },
  { code: "64", value: "PASSWD_CANT_CHANGE" },
  { code: "128", value: "ENCRYPTED_TEXT_PWD_ALLOWED" },
  { code: "256", value: "TEMP_DUPLICATE_ACCOUNT" },
  { code: "512", value: "Enabled Account" },
  { code: "514", value: "Disabled Account" },
  { code: "544", value: "Enabled, Password Not Required" },
  { code: "546", value: "Disabled, Password Not Required" },
  { code: "2048", value: "INTERDOMAIN_TRUST_ACCOUNT" },
  { code: "4096", value: "WORKSTATION_TRUST_ACCOUNT" },
  { code: "8192", value: "SERVER_TRUST_ACCOUNT" },
  { code: "65536", value: "DONT_EXPIRE_PASSWORD" },
  { code: "66048", value: "Enabled, Password Doesnt Expire" },
  {
    code: "66050",
    value: "Disabled, Password Doesn’t Expire",
  },
  {
    code: "66080",
    value: "Enabled, Password Doesn’t Expire & Not Required",
  },
  {
    code: "66082",
    value: "Disabled, Password Doesn’t Expire & Not Required",
  },
  {
    code: "66176",
    value: "DONT_EXPIRE_PASSWORD – ENCRYPTED_TEXT_PWD_ALLOWED",
  },
  {
    code: "262656",
    value: "Enabled, Smartcard Required",
  },
  {
    code: "262658",
    value: "Disabled, Smartcard Required",
  },
  {
    code: "262688",
    value: "Enabled, Smartcard Required, Password Not Required",
  },
  {
    code: "262690",
    value: "Disabled, Smartcard Required, Password Not Required",
  },
];
const ConvertActiveDirectoryCodeToDescription = (ADCode: string) => {
  const result = ADDescriptionCodes.filter((key) => {
    if (ADCode === key.code) {
      return key.value;
    }
  }).map((data: any) => data.value);
  return result[0];
};

export default ConvertActiveDirectoryCodeToDescription;
