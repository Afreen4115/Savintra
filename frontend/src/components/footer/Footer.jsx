import React from 'react';
import {CiFacebook}  from 'react-icons/ci'
import {FaInstagram} from 'react-icons/fa'

const Footer = ({content}) => {
  return (
    <div className='bg-black text-white py-8'>
       <div className='flex justify-around'>
         {
            content?.items && content?.items?.map((item,index)=>{
            return(
                <div className='flex flex-col'>
                    <p className='text-[22px] pb-[10px]'>{item?.title}</p>
                    {item?.list && item?.list?.map((listItem,index)=><a className='flex flex-col text-[14px] py-2' href={listItem?.path }>{listItem?.label}</a>)}
                    {item?.description && <p>{item?.description}</p>}
                </div>
                )
            })
         }
       </div>
       <div className='flex gap-2 items-center justify-center py-4'>
        <a href='/'><CiFacebook className='text-2xl'/></a>
        <a href='/'><FaInstagram className='text-2xl'/></a>
       </div>
       <p className='text-lg text-white text-center content-center'>{content?.copyright}</p>
    </div>
  )
}

export default Footer