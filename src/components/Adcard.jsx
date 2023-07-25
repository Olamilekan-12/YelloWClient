import StarIcon from '@mui/icons-material/Star';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const Adcard = ({ image, title, price, rating, phone }) => {
  return (
    <article className="w-[170px]">
      <div className="relative w-[170px] h-[94px]">
        <img src={image} alt="Product image" className="block" />
        <StarIcon className="absolute top-2 left-2" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>
            <span>New</span> Recommended
          </p>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div>
          <div className="flex">
            <CallIcon fontSize="small" />
            <ForumIcon fontSize="small" />
            <BookmarkAddIcon fontSize="small" />
          </div>
          <div>
            <p>Rating</p>
            <div>
              {rating === 1 ? (
                <>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                </>
              ) : rating === 2 ? (
                <>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]"></span>
                </>
              ) : rating === 3 ? (
                <>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]">
                    {' '}
                    hi
                  </span>
                </>
              ) : rating === 4 ? (
                <>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]">
                    {' '}
                    hi
                  </span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#FCB620]">
                    {' '}
                    hi
                  </span>
                </>
              ) : (
                <>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                  <span className="w-[9px] h-[9px] rounded-[1px] bg-[#5D2689]"></span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Adcard;
