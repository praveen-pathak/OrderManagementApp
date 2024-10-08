import React from "react";
import { Order, useGetOrdersQuery } from "../../../graphql/generated/schema";
import { Grid, Typography } from "@mui/material";
import OrderList from "./OrderList";
import OmLoading from "../../../components/elements/OmLoading";
import OmAlert from "../../../components/elements/OmAlert";

export default function OrdersDashboard() {
  const { data: orderData, loading, error } = useGetOrdersQuery();

  if (loading) {
    return <OmLoading />;
  }

  if (error || !orderData) {
    return <OmAlert message={"Could not load customers data"} />;
  }
  const orders = orderData.orders as Order[];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          component="div"
          variant="h5"
          display="block"
          gutterBottom
          align="center"
        >
          Orders List
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <OrderList orders={orders} />
      </Grid>
    </Grid>
  );
}
