import React from "react";
import ApiData from "./ApiData";

import Image from "next/image";
import Graph from "./Graph";
const RightSection = (props) => {
  // console.log(props.data.market_data.current_price.usd);
  return (
    <div className="flex  flex-col gap-10">
      <div className="flex flex-row gap-2 items-center">
        <img className="" src={props.data.image.small} />
        <h1 className="text-4xl font-bold capitalize">{props.data.id}</h1>
      </div>

      <div className="flex flex-wrap flex-row justify-around gap-4 ">
        <div className="px-5 py-3 bg-pink-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Price</p>
          <p>${props.data.market_data.current_price.usd}</p>
        </div>
        <div className="px-5 py-3 bg-blue-300 min-w-[200px]  text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Total Supply</p>
          <p>{props.data.market_data.total_supply}</p>
        </div>
        <div className="px-5 py-3 bg-red-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Max Supply</p>
          <p>{props.data.market_data.max_supply}</p>
        </div>

        <div className="px-5 py-3 bg-green-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Circulating Supply</p>
          <p>{props.data.market_data.circulating_supply}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2  ">
        <div className="flex flex-col flex-[40%]">
          <ApiData data={props.data} />
        </div>
        <div className="flex flex-[70%]">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
