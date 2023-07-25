import ProductsCard from './ProductsCard';
import image from '../assets/images/loader.jpg';
import { useState } from 'react';
import CustomTabPanel, { a11yProps } from './CustomPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import trencherhire from '../assets/images/trencher-hire.jpg';
import Dredge from '../assets/images/dredge.jpg';
import Feller from '../assets/images/feller.jpg';
import Lifting from '../assets/images/lifing.jpg';
import { useNavigate } from 'react-router-dom';

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
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
              onClick={() => navigate('/equipments')}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard image={image} title="Bulldozer" price={250000} />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard image={Dredge} title="Bulldozer" price={250000} />
            <ProductsCard image={Feller} title="Bulldozer" price={250000} />
            <ProductsCard image={Lifting} title="Bulldozer" price={250000} />
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
        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-wrap gap-2">
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
              price={250000}
            />
            <ProductsCard
              image={trencherhire}
              title="Bulldozer"
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
