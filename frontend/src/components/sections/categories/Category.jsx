import React from 'react'
import SectionHeading from '../sections-heading/SectionHeading'
import Card from '../../card/Card'

const Category = ({title,data}) => {
  return (
    <>
    <SectionHeading title={title}/>
    {data && data?.map((item,index)=>{
        return(
            <Card title={item?.title} description={item?.description} imagePath={item?.image} actionArrow={true} height={'300px'} width={'260px'}/>
        )
    })}

    </>
  )
}

export default Category