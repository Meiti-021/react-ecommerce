import React from "react";
import { serviceOptions } from "../database/mockdata";
import Service from "./service";

const ServiceOptions = () => {
  return (
    <div className="sevice-options">
      {serviceOptions.map((item) => {
        return <Service {...item} key={item.id} />;
      })}
    </div>
  );
};

export default ServiceOptions;
