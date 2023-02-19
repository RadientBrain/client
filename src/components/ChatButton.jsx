// import { Chat } from "@pushprotocol/uiweb";

// import React from 'react'

// function ChatNew() {
//     return (
//         <div>
//             <Chat
//             account="0x9dAdFaDcaBd4D10B664035778c215183ab1726e9"
//             supportAddress="0x0d75194C804C26912F233A0072A4816DDdcf3173"
//             apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
//             env="staging" />
//         </div>
//     )
// }

// export default ChatNew

import React, { useContext, useState } from "react";
// import { Web3Provider } from "@ethersproject/providers";
import { Chat } from "@pushprotocol/uiweb";
import { ITheme } from "@pushprotocol/uiweb";

export const ChatButton = (darkMode) => {
  // const theme: ITheme = {
  //   bgColorPrimary: darkMode ? "#F5E9CF" : "purple",
  //   bgColorSecondary: "purple",
  //   textColorPrimary: "#4D455D",
  //   textColorSecondary: "green",
  //   btnColorPrimary: "#FFB84C",
  //   btnColorSecondary: "purple",
  //   border: "1px solid #F16767",
  //   borderRadius: "20px",
  //   moduleColor: "pink",
  // };
  return (
    <div className="chat">
      <Chat
        account="0xC393B3B8072e17f5190d5e02a9E07443e24331Ee"
        supportAddress="0xC393B3B8072e17f5190d5e02a9E07443e24331Ee"
        apiKey="tAWEnggQ9Z.UaDBNjrvlJZx3giBTIQDcT8bKQo1O1518uF1Tea7rPwfzXv2ouV5rX9ViwgJUrXm"
        env="staging"
      />
    </div>
  );
};
