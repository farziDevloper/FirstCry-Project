export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeStorage = (item) => {
  localStorage.removeItem(item);
};

export const setStorage = (key, state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem(key, serializeState);
  } catch (error) {
    console.error("Err: Get Local Storage:", error);
  }
};

export function getUser() {
  //const authToken = getStorage("authToken");
  const authToken = getCookie("authToken");
  const loggedin = getStorage("loggedin");

  return authToken && loggedin;
}

export function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isEmpty(obj) {
  let isEmpty = false;
  const type = typeof obj;
  isEmpty = isEmpty || !obj;
  isEmpty = isEmpty || type === "undefined"; // if it is undefined
  isEmpty = isEmpty || obj === null; // if it is null
  isEmpty = isEmpty || (type === "string" && obj.trim() === ""); // if the string is empty or only have spaces
  isEmpty = isEmpty || obj === false || obj === 0; // if boolean value returns false
  isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
  isEmpty = isEmpty || (type === "object" && Object.keys(obj).length === 0); // if object is empty
  return isEmpty;
}

export const getSelectOptions = (objList, id = "id", name = "name") => {
  const options = [];
  if (isEmpty(objList)) {
    return options;
  }
  if (Array.isArray(objList)) {
    objList.forEach((obj) => {
      const optValue = obj[id];
      const optName = obj[name];
      options.push({ label: optName, value: optValue });
    });
  } else {
    Object.keys(objList).forEach((key) => {
      const optValue = objList[key][id] || key;
      const optName = objList[key][name] || objList[key];
      options.push({ label: optName, value: optValue });
    });
  }

  return options;
};

export const deepClone = (obj) => {
  if (isEmpty(obj)) return null;
  return JSON.parse(JSON.stringify(obj));
};

export const getParams = (formArray) => {
  const params = {};
  formArray.forEach((control) => {
    params[control.name] = control.value;
  });
  return params;
};

export const getOptionFromKey = (key, textToReplace) => {
  if (isEmpty(key)) return null;
  let _label = key.replace(eval("/" + textToReplace + "/g"), "");
  _label = _label.split("_").join(" ").toLowerCase();
  return { value: key, label: _label };
};

export const setSelectedOptions = (key, options) => {
  let selected = options.filter((option) => option.value === key)[0];
  return selected;
};

export const userLogout = () => {
  removeStorage("authToken");
  removeStorage("loggedin");
  deleteCookie("authToken");
};

export const paginator = (items, current_page, per_page_items) => {
  let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
};

export function currencyFormat(
  num,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0
) {
  if (!Number.isFinite(Number(num)) || num === null || isEmpty(num))
    return "₹0";
  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
    useGrouping: true,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(num);
}

export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setCookie = (authToken) => {
  var date = new Date();
  date.setTime(date.getTime() + 480 * 60 * 1000);
  var expires = "; expires=" + date.toGMTString();
  document.cookie = "authToken=" + authToken + expires + "; path=/";
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const fromDateConvert = (str) => {
  if (str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-") + "" + " 00:00:00";
  } else {
    return " ";
  }
};

export const toDateConvert = (str) => {
  if (str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-") + "" + " 23:59:00";
  } else {
    return " ";
  }
};

export const dateConvertWithoutTime = (str) => {
  if (str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  } else {
    return null;
  }
};
