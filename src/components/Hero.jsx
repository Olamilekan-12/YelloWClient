import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Hero = () => {
  return (
    <>
      <div className="home-hero  text-white flex flex-col items-center pt-10">
        <h1 className="mb-[23px] text-2xl font-bold">
          Find all Equipment & Construction Services
        </h1>
        <div className="w-[119px] capitalize whitespace-nowrap flex justify-center items-center gap-x-1 bg-[#FCB620] rounded-md px-2 py-1">
          <LocationOnIcon />
          <p>all nigeria</p>
        </div>
      </div>
      <div className="bg-[#5D2689] h-[135px] px-4">
        <div className="bg-[#F0F9FE] h-[63px] md:max-w-[600px] mx-auto rounded-[4px] shadow-md flex items-center px-4">
          <SearchOutlinedIcon fontSize="large" />
          <input
            type="text"
            placeholder="what are you looking for"
            className="flex-1 bg-transparent focus:outline-none p-2"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
