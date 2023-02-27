import axios from "axios";
import { useEffect, useState } from "react";

const useSendDataHttp = () => {
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const [resmails, setMails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          `https://data-edd3c-default-rtdb.firebaseio.com/email-box/${email}/sent.json`
        )
        .then((res) => {
          setMails(res.data);
        })
        .catch((err) => {
        });
    }, 2000);
  }, [email]);

  if (resmails === null) {
    return "";
  }

  const result = Object.values(resmails);
  result.reverse();

  return result;
};

export default useSendDataHttp;