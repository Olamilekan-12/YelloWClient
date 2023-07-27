import { Delete } from '@mui/icons-material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Divider } from '@mui/material';

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const handleChange = (event) => {
    // setAge(event.target.value);
  };

  const addImageToPost = (e) => {
    let imagesUpload = [];
    for (let index = 0; index < e.target.files.length; index++) {
      imagesUpload.push(URL.createObjectURL(e.target.files[index]));
    }
    setImages(imagesUpload);
    console.log(images);
  };

  return (
    <main className="marginT bg-[hsl(201,88%,97%)] py-10">
      <div className="max-w-[700px] mx-auto bg-white relative">
        <div className="text-center flex items-center justify-center w-full py-2 rounded-md">
          <h1 className="">Create ad</h1>
          <div className="absolute right-4">
            <Delete htmlColor="#5D2689" />
          </div>
        </div>
      </div>
      <div className="max-w-[700px] mx-auto bg-white py-6 mt-2">
        <div className="max-w-[500px] mx-auto bg-white relative">
          <Box>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Category"
              defaultValue=""
              SelectProps={{
                native: true,
              }}
              fullWidth
            >
              {[
                '',
                'Earth Moving Equipment',
                'Transportation',
                'Lifting',
                'Arial Equipment',
                'Dredging',
                'Excavation',
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Box>
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <Box>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Location"
              defaultValue=""
              SelectProps={{
                native: true,
              }}
              fullWidth
            >
              {[
                '',
                'Lagos',
                'Abuja',
                'Kano',
                'Port-Harcourt',
                'Onitsha',
                'Ibadan',
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Box>
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Title"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Title"
          />
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <input
            style={{ all: 'unset' }}
            type="file"
            multiple
            onChange={addImageToPost}
          />
          {images.length
            ? images.map((item) => (
                <article className="mt-2">
                  <img src={item} width={100} className="block" />
                </article>
              ))
            : null}
          <div className="mt-2">
            <p>Supported files are .jpg/.jpeg/.png/.git 3mb max</p>
          </div>
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Video Link"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Link to your Youtube/Drive video"
          />
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Brand"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Brand name"
          />
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Model"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Model"
          />
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Engine"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Engine"
          />
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <Box>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Power"
              defaultValue=""
              SelectProps={{
                native: true,
              }}
              fullWidth
            >
              {['', 'Diesel', 'Petrol', 'Electric'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Box>
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <Box>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Ad Type"
              defaultValue=""
              SelectProps={{
                native: true,
              }}
              fullWidth
            >
              {['', 'Rental', 'For Sale'].map((option) => (
                <>
                  <option key={option} value={option}>
                    {option}
                  </option>
                </>
              ))}
            </TextField>
          </Box>
        </div>
        <div className="max-w-[500px] mx-auto bg-white relative mt-4">
          <TextField
            id="outlined-controlled"
            label="Price"
            value={''}
            onChange={(event) => {}}
            fullWidth
            placeholder="Price"
          />
        </div>
      </div>
      <div className="max-w-[700px] mx-auto bg-white relative mt-2 py-8">
        <div className="max-w-[500px] mx-auto">
          <h3>Prioritize your ad</h3>
          <p>Prioritizing your add will give you more visibility</p>
        </div>
        <div className="max-w-[500px] mx-auto bg-[#5D2689] text-white p-4 rounded-md mt-3">
          <div>
            <p className="text-[1.2rem] font-medium"> Silver</p>
            <div className="flex justify-between items-center text-[3rem]">
              <span className="text-[1.23rem]">7 days</span>
              <span className="bg-[#FCB620] text-[1.23rem] p-2 rounded-3xl">
                #2500
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-[500px] mx-auto bg-[#5D2689] text-white p-4 rounded-md mt-3">
          <div>
            <p className="text-[1.2rem] font-medium">Gold</p>
            <div className="flex justify-between items-center">
              <span className="text-[1.23rem]">2 days</span>
              <span className="bg-[#FCB620] text-[1.23rem] p-2 rounded-3xl">
                #4500
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-[500px] mx-auto bg-[#5D2689] text-white p-4 rounded-md mt-3">
          <div>
            <p className="text-[1.2rem] font-medium">Platinum</p>
            <div className="flex justify-between items-center">
              <span className="text-[1.23rem]">1 month</span>
              <span className="bg-[#FCB620] text-[1.23rem] p-2 rounded-3xl">
                #8000
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[250px] mx-auto mt-4 py-4 bg-[#FCB620] rounded-md">
          <button className="" style={{ border: 'none' }}>
            Post Ad
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddProduct;
