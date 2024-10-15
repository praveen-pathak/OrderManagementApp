import { Container } from "@mui/system";
import OmHeader from "../../components/elements/OmHeader";
import Grid from "@mui/material/Grid";
import React from "react";
import { useParams } from "react-router-dom";
import { Order } from "../../graphql/generated/schema";
import OrderForm from "./orderForm/orderForm";

export default function NewOrderPage() {
  const params = useParams();
  const customerId = parseInt(params.customerId || "0");

  const order = {
    customerId: customerId,
  } as Order;

  return (
    <Container>
      <Grid item spacing={12}>
        <Grid item xs={12}>
          <OmHeader header={"New Order Details"} />
        </Grid>
        <Grid item xs={12}>
          <OrderForm order={order} />
        </Grid>
      </Grid>
    </Container>
  );
}
