import React from "react";
import { useField, useFormikContext } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox, // Import Checkbox from MUI
} from "@mui/material";

interface OmCheckBoxProps {
  name: string;
  label: string;
  legend: string;
  otherProps?: any; // Made optional
}

export default function OmCheckBox({
  name,
  label,
  legend,
  otherProps = {}, // Default to an empty object
}: OmCheckBoxProps) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    setFieldValue(name, checked);
  }

  const configTextField = {
    ...otherProps,
    ...field,
    onChange: handleChange,
    checked: field.value, // Should be field.value, not meta.value
  };

  const configFormControl: any = {};
  if (meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configTextField} />} // Use Checkbox here
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}
