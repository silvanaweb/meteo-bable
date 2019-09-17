import React from "react";

type Props = {
  message: string | null;
};
const ErrorView: React.FunctionComponent<Props> = ({ message, children }) => {
  return !!message ? (
    <div className="text-align--center font-medium">{message}</div>
  ) : (
    <>{children}</>
  );
};

export { ErrorView };
