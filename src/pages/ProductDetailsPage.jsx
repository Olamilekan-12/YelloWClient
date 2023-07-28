import React from 'react';
import Asphalt from '../assets/images/asphat.png';
import { Bookmark, BookmarkAddOutlined } from '@mui/icons-material';
import { Breadcrumbs, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <main className="marginT bg-[hsl(201,88%,97%)]">
      <div className="max-w-[1140px] mx-auto pt-8 px-2 lg:px-0">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              YellowIron
            </Link>
            <Link underline="hover" color="inherit" to="/products">
              Earth Moving Equipment
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              to="/products"
              aria-current="page"
            >
              Bulldozer
            </Link>
          </Breadcrumbs>
        </div>
        <div>
          <h3 className="text-3xl">Earth Moving Equipment</h3>
          <div className="bg-[#5D2689] w-16 h-1 mt-2"> </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-4">
          <div className="lg:w-[70%] flex flex-col">
            <div className="lg:h-[500px] h-[300px] relative w-full">
              <img src={Asphalt} alt="" className="w-full h-full" />
            </div>
            <div className="bg-white px-4 py-8">
              <div className="mb-4">
                <p>Equipment name:</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Bulldozer</h3>
                  <BookmarkAddOutlined />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">Description</h3>
                <p>
                  The 19 ft narrow electric scissor lift is great for indoor
                  applications, and can navigate spacious indoor areas. Limited
                  to vertical lifting mobility, the electric scissor lift is
                  best suited for jobs that require work in a fixed location for
                  an indefinite amount of time, and can hold multiple occupants
                  with its wide aerial work platform. Typical projects range
                  from sign hanging, ceiling work, and various construction and
                  maintenance tasks. Electric powered, the scissor lift is ideal
                  for indoor tasks and construction or maintenance crews.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">Specifications</h3>
                <div>
                  <div className="flex justify-between items-center my-2">
                    <p>Brand</p>
                    <h3>Caterpillar</h3>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center my-2">
                    <p>Production date</p>
                    <h3>Caterpillar</h3>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center my-2">
                    <p>Engine</p>
                    <h3>CAT C.9 203hp</h3>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center my-2">
                    <p>Brand</p>
                    <h3>Caterpillar</h3>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center my-2">
                    <p>Brand</p>
                    <h3>Caterpillar</h3>
                  </div>
                  <Divider />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] bg-white">
            <h2>Details</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
