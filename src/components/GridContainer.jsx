import Gridcards from './Gridcards';
import Supply from '../assets/supply.png';
import Repairs from '../assets/repairs.png';
import Construct from '../assets/construct.png';
import Engineer from '../assets/engineer.png';
import Cat from '../assets/cat.png';

const GridContainer = () => {
  return (
    <div className="flex flex-wrap gap-1 justify-center mt-[40px]">
      <Gridcards image={Supply} text="Add" url="/Supplies" />
      <Gridcards image={Supply} text="Supplies" url="/Supplies" />
      <Gridcards image={Repairs} text="Repairs" url="/Repairs" />
      <Gridcards image={Construct} text="Construction" url="/Construction" />
      <Gridcards image={Engineer} text="Engineers" url="/Engineers" />
      <Gridcards image={Cat} text="Caterpillar" url="/Dredging" />
    </div>
  );
};

export default GridContainer;
