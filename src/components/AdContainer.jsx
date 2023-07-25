import Adcard from './Adcard';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

const AdContainer = () => {
  return (
    <section>
      <Adcard image={Image1} title="Bulldozer" rating={4} price={250000} />
      <Adcard image={Image1} title="Grader" rating={3} price={350000} />
      <Adcard image={Image1} title="Wheel Loaders" rating={4} price={250000} />
      <Adcard image={Image1} title="compactors" rating={3} price={550000} />
      <Adcard
        image={Image1}
        title="Feller Bunchers"
        rating={4}
        price={250000}
      />
      <Adcard image={Image1} title="Excavators" rating={3} price={450000} />
    </section>
  );
};

export default AdContainer;
