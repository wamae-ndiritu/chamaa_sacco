export const validateInputsError = (details) => {
  for (const key in details) {
    if (details.hasOwnProperty(key)) {
      if (details[key] === "") {
        return true;
      }
    }
  }
  return false; // No empty string values found, return true
};

export const formatPhoneNumber = (phone) => {
  if (phone.substring(0, 3) === "254"){
    if (phone.length === 12){
      return phone;
    }else{
      return null;
    }
  }else{
    if ((phone.substring(0, 2) === "07" || phone.substring(0, 2) === "01") && phone.length === 10){
      const res = phone.replace("0", "254");
      return res;
    }else{
      return null;
    }
  }
}
