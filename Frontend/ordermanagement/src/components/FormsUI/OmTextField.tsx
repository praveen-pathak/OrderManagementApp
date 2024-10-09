import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface OmTextFieldProps {
  name: string;
  otherProps: any;
}

export default function OmTextField({ name, otherProps }: OmTextFieldProps) {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    varient: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
}
