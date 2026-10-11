import { useContext } from "react";
import { OrderContext } from "./OrderProvider";

export default function useOrder() {

  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("UseOrder debe utilizarse dentro de un OrderProvider");
  }

  return context;
}