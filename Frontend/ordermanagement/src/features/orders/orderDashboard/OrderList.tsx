import React, {useState, useMemo} from "react";
import { Customer, Order } from "../../../graphql/generated/schema";


interface OrderListProps {
    orders: Order[]
}
export default function OrderList({orders} : OrderListProps){
    const [columnDefs] = useState([
        {
          field: "id",
          width: 50,
          suppressSizeToFit: true,
        },
        { 
            field: "customers",
            cellRenderer: function(params:any) {
                const customer = params.value as Customer
            } 
        },
        { field: "lastName" },
        { field: "contactNumber" },
        { field: "email" },
        {
          field: "address",
          cellRenderer: function (params: any) {
            const address = params.value as Address;
            return (
              address.addressLine1 +
              "," +
              address.addressLine2 +
              "," +
              address.city +
              "," +
              address.state +
              "," +
              address.country
            );
          },
        },
      ]);
    
}