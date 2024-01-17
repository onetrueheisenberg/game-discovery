import React from "react";

const Message = () => {
  const name = "James";
  if (name) {
    return <h1>Hello {name} !</h1>;
  }
  return <h1> Helloe Jameirms !</h1>;
};

export default Message;
