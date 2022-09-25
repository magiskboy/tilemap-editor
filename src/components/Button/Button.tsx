import type React from "react";

function Button(props: Props & React.HTMLAttributes<HTMLButtonElement>) {
  const { icon, children, ...rest } = props;

  return (
    <button {...rest}>
      {icon ? <img src={icon} alt="icon" /> : null}
      {children}
    </button>
  );
}

interface Props {
  children?: React.ReactNode;
  icon?: string;
}

export default Button;
