import { Link } from 'react-router-dom';

const Gridcards = ({ image, text, url }) => {
  return (
    <Link to={url}>
      <div className="w-[128px] h-[128px] bg-white flex flex-col justify-center items-center gap-2 ">
        <img
          src={image}
          alt="Category image"
          className="w-[81px] h-[60px] object-contain"
        />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Gridcards;
