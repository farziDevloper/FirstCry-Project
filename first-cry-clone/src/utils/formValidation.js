export const formValidation = (values, excludeField, errorsObj) => {
  const errors = {};
  if (errorsObj && Object.keys(errorsObj).length != 0) {
    Object.keys(values).map((key) => {
      if (!excludeField.includes(key)) {
        errors[key] = errorsObj[key];
      }
    });
    return errors;
  } else {
    Object.keys(values).map((key) => {
      if (!excludeField || (excludeField && !excludeField.includes(key))) {
        const error = validateField(key, values[key]);
        if (error) {
          errors[key] = error;
        }
      }
    });
    return errors;
  }
};

const validateField = (key, value) => {
   
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  const regexPan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  const regexGst = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  const regexMobile = /^[6789]\d{9}$/;
  const regexPincode = /^(\d{4}|\d{6})$/;
  const regexAdhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;

  switch (key) {
    case "email":
      if (!value) {
        return "Email is required!";
      } else if (!regexEmail.test(value)) {
        return "This is not a valid email format!";
      }
      break;
    case "businessEmail":
      if (!value) {
        return "Email is required!";
      } else if (!regexEmail.test(value)) {
        return "This is not a valid email format!";
      }
      break;  
    case "password":
      if (!value) {
        return "Password is required!";
      } /*  else if (!regexPass.test(value)) {
        return "Requires one lower case letter, one upper case letter, one digit, one special charactor(#@$%), minimum 6 length and maximum 20 ";
      } */
      break;
    case "mobileNumber":
      if (!value) {
        return "Mobile number is required!";
      } else if (!regexMobile.test(value)) {
        return "Mobile number invalid!";
      }
      break;
    case "panNumber":
      if (!value) {
        return "Pan number is required!";
      } else if (!regexPan.test(value)) {
        return "Please enter valid pan number!";
      }
      break;

      case "aadhaarNumber":
        if (!value) {
          return "Aadhaar number is required!";
        } else if (!regexAdhar.test(value)) {
          return "Please enter valid aadhaar number!";
        }
        break;

    case "gstNumber":
      if (!value) {
        return "GST number is required!";
      } else if (!regexGst.test(value)) {
        return "Please enter valid GST Number!";
      }
      break;  
    case "pinCode":     
      if (!value) {
        return "Pin code is required!";
      } else if (!regexPincode.test(value)) {
        return "Pin code invalid!";
      }
      break;    
    case key:
      if (value ==='') {
        return `${key} is required!`;
      }else {
        if(Array.isArray(value) && value.length==0)
        {
          return `${key} is required!`;
        }
      }
      break;

    default:
      break;
  }
};
