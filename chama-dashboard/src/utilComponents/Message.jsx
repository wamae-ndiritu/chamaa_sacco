import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className={`alert ${variant} text-center alert-message my-1 py-2`}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
