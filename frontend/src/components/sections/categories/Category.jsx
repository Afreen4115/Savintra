import SectionHeading from '../sections-heading/SectionHeading'
import Card from '../../card/Card'

const Category = ({title,data}) => {
  return (
    <>
      <SectionHeading title={title} />
      <div className="px-8 flex">
        {data &&
          data?.map((item, index) => {
            return (
              <Card
                key={item?.title+index}
                title={item?.title}
                description={item?.description}
                imagePath={item?.image}
                actionArrow={true}
                height={"400px"}
                width={"280px"}
              />
            );
          })}
      </div>
    </>
  );
}

export default Category