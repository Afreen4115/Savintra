import React from 'react'
import SectionHeading from './sections-heading/SectionHeading'
import Card from '../card/Card';
import Jeans from '../../assets/images/jeans-girl.png'
import Shirt from '../../assets/images/shirt-boy.png'
import TShirt from '../../assets/images/tshirt-boy.png'
import Dress from '../../assets/images/dress-girl.png'
import Joggers from '../../assets/images/joggers-boy.png'
import Kurtis from '../../assets/images/kurtis-girl.png'
import Skirts from '../../assets/images/skirts-girl.png'
import CarouselModule from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants.js';

const Carousel = CarouselModule.default ?? CarouselModule;

const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "T-Shirts",
    imagePath: TShirt,
  },
  {
    title: "Skirts",
    imagePath: Skirts,
  },
  {
    title: "Joggers",
    imagePath: Joggers,
  },
  {
    title: "Kurtis",
    imagePath: Kurtis,
  },
  {
    title: "Shirts",
    imagePath: Shirt,
  },

  {
    title: "Dresses",
    imagePath: Dress,
  },
];

console.log("Carousel:", Carousel);
console.log("Card:", Card);
console.log("SectionHeading:", SectionHeading);

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />
      <Carousel
       responsive={responsive}
       autoPlay={false}
       swipeable={false}
       draggable={false}
       showDots={false}
       infinite={false}
       partialVisible={false}
       itemClass={`react-slider-custom-item`}
       className='px-8'
      >
        {items &&
          items?.map((item, index) => {
            return (
              <Card
                key={item.title + index}
                title={item?.title}
                imagePath={item?.imagePath}
              />
            );
          })}
      </Carousel>
    </>
  );
}

export default NewArrivals