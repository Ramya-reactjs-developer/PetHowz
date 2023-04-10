import moment from "moment";
import Axios from "axios";
import { defaultReject } from "../Constants/commonSchema";
import { adminUrl } from "../Constants/url";

const validateNetworkError = ({ res, rejectWithValue }) =>
  // eslint-disable-next-line consistent-return, no-unused-vars
  new Promise((resolve, reject) => {
    if (!res.ok)
      // eslint-disable-next-line no-promise-executor-return
      return rejectWithValue({
        ...defaultReject,
        message: `${res.statusText}`,
      });
    resolve();
  });
const returnException = ({ error, rejectWithValue }) =>
  rejectWithValue({
    ...defaultReject,
    message: error.message,
  });
// const Notify = UseNotification();

// const handleButtonClick = async () => {
//   try {
//     const input = ... // define your input object here
//     const response = await fetchData(input, "POST", "/api/your-endpoint");
//     // handle the response data here
//     // render the UI with the response data
//   } catch (err) {
//     // handle any errors here
//   }
// };
// const fetchData = async (input, method, apiName) => {
//   const token = localStorage.getItem("LoginChecker");
//   const res = await Axios({
//     method,
//     url: `${adminUrl}${apiName}`,
//     data: input,
//     headers: {
//       Authorization: token,
//     },
//   }).catch((err) => {
//     // eslint-disable-next-line no-alert
//     alert(err.code);
//   });
//   return res;
// };

const fetchData = async (input, method, apiName) => {
  try {
    const token = localStorage.getItem("LoginChecker");
    const res = await Axios({
      method,
      url: `${adminUrl}${apiName}`,
      data: input,
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err.code);
  }
};

// const fetchData = async (input, method, apiName) => {
//   try {
//     const token = localStorage.getItem("LoginChecker");
//     const response = await fetch(`${adminUrl}${apiName}`, {
//       method,
//       headers: {
//         Authorization: token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(input)
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return { data };
//   } catch (err) {
//     alert(err);
//   }
// };

const getAge = (date) => {
  if (date) {
    const yearDiff = moment().diff(moment(date, "DD/MM/YYYY"), "years", false);
    if (yearDiff > 0) {
      return `${yearDiff} Y`;
    }
    const monthDiff = moment().diff(
      moment(date, "DD/MM/YYYY"),
      "months",
      false
    );
    if (monthDiff > 0) {
      return `${monthDiff} M`;
    }
    const dayDiff = moment().diff(moment(date, "DD/MM/YYYY"), "days", false);
    return `${dayDiff} D`;
  }
  return "";
};
const makeName = (nameObj = {}) => {
  const {
    prefix = "",
    given = "",
    text = "",
    suffix = "",
    family = "",
  } = nameObj;
  const prefixVal =
    prefix?.[0]?.coding?.[0]?.display ||
    prefix?.coding?.[0]?.display ||
    prefix?.[0]?.display ||
    prefix?.display ||
    "";
  const suffixVal =
    suffix?.[0]?.coding?.[0]?.display ||
    suffix?.coding?.[0]?.display ||
    suffix?.[0]?.display ||
    suffix?.display ||
    "";
  return `${prefixVal && `${prefixVal}.`}${text && `${text} `}${
    given && `${given} `
  }${family && `${family} `}${suffixVal && suffixVal}`;
};
const getUtcTime = (date) => {
  if (date) {
    return moment.utc(date).unix();
  }
  return moment.utc().unix();
};

function base64ToBinary(base64String) {
  const binaryString = window.atob(base64String);
  const binaryData = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    binaryData[i] = binaryString.charCodeAt(i);
  }
  return binaryData;
}
const utcTOLocal = (date, format) => {
  let Ndate = new Date();
  if (typeof date === "number") {
    Ndate = moment.unix(date);
  } else {
    Ndate = moment(date);
  }
  const fmt = format || "DD-MM-YYYY";
  if (format) {
    return moment.utc(Ndate).local().format(fmt);
  }
  return moment.utc(Ndate).local();
};
export {
  getAge,
  validateNetworkError,
  returnException,
  fetchData,
  getUtcTime,
  utcTOLocal,
  makeName,
  base64ToBinary,
};
