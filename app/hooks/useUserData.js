import { useState, useEffect } from "react";
import * as storageMethods from "../storage/saveToStorage";

export default () => {
  const [userData, setuserData] = useState(false);
  const getData = () => {
    storageMethods.getObj("userData").then((res) => {
      if (res) setuserData(res);
    });
  };
  useEffect(() => getData(), []);
  return { userData, getData };
};
