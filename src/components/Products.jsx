import ProductsCard from "./ProductsCard";
import image from "../assets/images/loader.jpg";
import { useState } from "react";
import CustomTabPanel, { a11yProps } from "./CustomPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import trencherhire from "../assets/images/trencher-hire.jpg";
import Dredge from "../assets/images/dredge.jpg";
import Feller from "../assets/images/feller.jpg";
import Lifting from "../assets/images/lifing.jpg";
import Borehole from "../assets/images/borehole.jpg";
import WheelTractor from "../assets/images/wheel-tractor.jpeg";
import Asphalt from "../assets/images/asphat p.png";
import WheelLoader from "../assets/images/wheel-loaders.jpg";
import Excavator from "../assets/images/excavator.jpg";
import Grader from "../assets/images/grader.jpeg";
import Crane from "../assets/images/cranes.jpg";
import Compactor from "../assets/images/compactoors.jpeg";
import DumpTruck from "../assets/images/dump.jpg";
import Backhoe from "../assets/images/backhoe.avif";
import Skid from "../assets/images/skid.jpg";
import Crawler from "../assets/images/crawler.webp";
import Scrapper from "../assets/images/Scraper.webp";

import { useNavigate } from "react-router-dom";

const Products = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <section className="max-w-[1140px] mx-auto mt-[100px] px-2">
      <div>
        <h1 className="text-3xl font-bold">Trending Ads</h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Popular" {...a11yProps(0)} />
            <Tab label="Earth Moving" {...a11yProps(1)} />
            <Tab label="Dredging" {...a11yProps(2)} />
            <Tab label="Loaders" {...a11yProps(3)} />
            <Tab label="Site Service" {...a11yProps(4)} />
            <Tab label="Ariel Works" {...a11yProps(5)} />
            <Tab
              label="See All Equipment"
              onClick={() => navigate("/equipments")}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={image} title="Bulldozers" price={250000} />
            <ProductsCard
              image={trencherhire}
              title="Trenchers"
              price={250000}
            />
            <ProductsCard image={Dredge} title="Skid Steers" price={250000} />
            <ProductsCard
              image={Feller}
              title="Feller Bunchers"
              price={250000}
            />
            <ProductsCard image={Lifting} title="Telehandlers" price={250000} />
            <ProductsCard image={Borehole} title="Boreholes" price={250000} />
            <ProductsCard image={Grader} title="Graders" price={250000} />
            <ProductsCard
              image={WheelTractor}
              title="Wheel Tractors"
              price={250000}
            />
            <ProductsCard image={Excavator} title="Excavators" price={250000} />
            <ProductsCard
              image={Asphalt}
              title="Asphalt Pavers"
              price={250000}
            />
            <ProductsCard
              image={WheelLoader}
              title="Wheel Loaders"
              price={250000}
            />
            <ProductsCard image={Crane} title="Cranes" price={250000} />
            <ProductsCard image={Compactor} title="Compactors" price={250000} />
            <ProductsCard image={DumpTruck} title="Dump Truck" price={250000} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={Excavator} title="Excavators" price={250000} />
            <ProductsCard image={image} title="Bulldozers" price={250000} />
            <ProductsCard
              image={WheelLoader}
              title="Wheel
              Loaders"
              price={250000}
            />
            <ProductsCard
              image={Backhoe}
              title="Backhoe Loaders"
              price={250000}
            />
            <ProductsCard image={Skid} title="Skid Steers" price={250000} />
            <ProductsCard
              image={Crawler}
              title="Crawler Loaders"
              price={250000}
            />
            <ProductsCard image={Scrapper} title="Scrapers" price={250000} />
            <ProductsCard
              image={trencherhire}
              title="Trenchers"
              price={250000}
            />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard image={image} title="Bulldozer" price={250000} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
          </div>
        </CustomTabPanel>
      </Box>
    </section>
  );
};

export default Products;
