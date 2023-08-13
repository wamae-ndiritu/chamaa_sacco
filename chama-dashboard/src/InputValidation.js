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
