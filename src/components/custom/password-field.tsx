"use cliente";

import React, { MouseEvent, useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { EyeClosedIcon, EyeOpenIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { InputProps } from "@/components/ui/input";
import { Field } from "./field";



type PasswordFielProps = Omit<InputProps, "type"> & {
  type?: "text" | "password"
};



const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFielProps
>(({className, ...props}: PasswordFielProps, ref) => {

  const [visible, setVisible] = useState<boolean>(false);

  function toggleType(e: MouseEvent<HTMLButtonElement>) : void {
    e.preventDefault();
    setVisible(!visible);
  }

  return (
    <Field
      ref={ref}
      {...props}
      type={visible ? "text" : "password"}
      icon={ <LockClosedIcon />}
      button={
        <IconButton
          size="1"
          type="button"
          variant="ghost"
          onClick={ toggleType }
        >
          {visible ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </IconButton>
      }
    />
  );
});



export { PasswordField };
