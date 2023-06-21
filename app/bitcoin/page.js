"use client";
import RightSection from "@/components/RightSection";
import { SingleCoin } from "@/config/api";
import React, { useEffect, useState } from "react";

const page = async () => {
  const apiData = SingleCoin("bitcoin");
  const response = await fetch(apiData, {
    next: {
      revalidate: 2,
    },
  });
  const data = await response.json();

  // console.log(data.market_data.current_price.usd);
  return (
    <div>
      <RightSection data={data} />
    </div>
  );
};

export default page;
