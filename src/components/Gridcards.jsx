import { Link } from 'react-router-dom';

const Gridcards = ({ image, text, url, sell }) => {
  if (sell)
    return (
      <Link to={url}>
        <div className="w-[128px] h-[128px] bg-white flex flex-col justify-center items-center gap-2 ">
          <div className="bg-[#5D2689] w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center ">
            <p className="text-3xl font-bold text-white">+</p>
          </div>
          <p className="font-medium">{text}</p>
        </div>
      </Link>
    );
  return (
    <Link to={url}>
      <div className="w-[128px] h-[128px] bg-white flex flex-col justify-center items-center gap-2 ">
        <img
          src={image}
          alt="Category image"
          className="w-[81px] h-[60px] object-contain"
        />
        <p className="font-medium">{text}</p>
      </div>
    </Link>
  );
};

export default Gridcards;
