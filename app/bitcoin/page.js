import { SingleCoin } from "@/config/api";
import React from "react";

const Page = async () => {
  const apiData = SingleCoin("bitcoin");
  const response = await fetch(apiData);
  const data = await response.json();
  console.log(data.market_data.current_price.usd);
  return <div>bitcoin</div>;
};

export default Page;
