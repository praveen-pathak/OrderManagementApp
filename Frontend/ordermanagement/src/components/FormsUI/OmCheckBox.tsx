import React from "react";
import { useField, useFormikContext } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import configCheckBox from "@mui/icons-material";
import { CheckBox } from "@material-ui/icons";

interface OmCheckBoxProps {
  name: string;
  label: string;
  legend: string;
  otherProps: any;
}

export default function OmCheckBox({
  name,
  label,
  legend,
  otherProps,
}: OmCheckBoxProps) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  function handleChange(event: any) {
    const { checked } = event.target;
    setFieldValue(name, checked);
  }

  const configTextField = {
    ...otherProps,
    ...field,
    onChange: handleChange,
    checked: meta.value,
  };

  const configFormControl: any = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<CheckBox {...configCheckBox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}
