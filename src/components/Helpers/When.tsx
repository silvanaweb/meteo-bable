import React from "react";

export const When: React.FC<{ condition: boolean }> = ({
  condition,
  children
}) => (condition ? <>{children}</> : null);
