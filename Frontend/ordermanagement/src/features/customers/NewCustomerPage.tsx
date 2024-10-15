import React from "react";
import { Customer } from "../../graphql/generated/schema";
import { Container } from "@mui/system";
import OmHeader from "../../components/elements/OmHeader";
import Grid from "@mui/material/Grid";
import CustomerForm from "./customerForms/CustomerForm";

export default function NewCustomerPage() {
  const customer = {} as Customer;
  return (
    <Container>
      <Grid item spacing={12}>
        <Grid item xs={12}>
          <OmHeader header={"New Customer Details"} />
        </Grid>
        <Grid item xs={12}>
          <CustomerForm customer={customer} />
        </Grid>
      </Grid>
    </Container>
  );
}
