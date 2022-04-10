import React from "react";
import { GiEarthAmerica } from "@react-icons/all-files/gi/GiEarthAmerica";
import { MdAirplanemodeActive } from "@react-icons/all-files/md/MdAirplanemodeActive";
import { MdTimer } from "@react-icons/all-files/md/MdTimer";
import { FaMoneyCheck } from "@react-icons/all-files/fa/FaMoneyCheck";

export const StatsData = [
  {
    icon: <GiEarthAmerica color='#047bf1' />,
    title: "Over 100 Destination",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: <MdAirplanemodeActive color='#f3a82e' />,
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: <MdTimer color='#f34f2e' />,
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FaMoneyCheck color='#3af576' />,
    title: "Best Deals",
    desc: "We Offer the best prices",
  },
];
