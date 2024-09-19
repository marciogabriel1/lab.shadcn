import React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";



type FieldProps = InputProps & {
  icon?: React.ReactNode,
  button?: React.ReactNode
};



const Field = React.forwardRef<
  HTMLInputElement,
  FieldProps
>(({className, icon, button, ...props }, ref) => {

  return (
    <div className="relative w-full flex flex-row justify-between items-center">
      
      {icon ? (
        <div className="absolute left-2.5 h-4 w-4">
          {icon}
        </div>
      ) : <></>}

      <Input
        ref={ref}
        {...props}
        className={cn(className, "ps-8 pe-8")}
      />

      {button ? (
        <div className="absolute right-2.5 h-4 w-4">
          {button}
        </div>
      ) : <></>}

    </div>
  );
});



export { Field };
