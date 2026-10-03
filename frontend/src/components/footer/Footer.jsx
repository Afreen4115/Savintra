import React from 'react';
import {CiFacebook}  from 'react-icons/ci'
import {FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = ({content}) => {
  return (
    <div className='bg-black text-white py-8'>
       <div className='flex justify-around'>
         {
            content?.items && content?.items?.map((item,index)=>{
            return (
              <div className="flex flex-col" key={item?.title + index}>
                <p className="text-[22px] pb-[10px]">{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, index) => (
                    <Link
                      key={listItem?.label + index}
                      className="flex flex-col text-[14px] py-2"
                      to={listItem?.path}
                    >
                      {listItem?.label}
                    </Link>
                  ))}
                {item?.description && <p>{item?.description}</p>}
              </div>
            );
            })
         }
       </div>
       <div className='flex gap-2 items-center justify-center py-4'>
        <Link to='/'><CiFacebook className='text-2xl'/></Link>
        <Link to='/'><FaInstagram className='text-2xl'/></Link>
       </div>
       <p className='text-lg text-white text-center content-center'>{content?.copyright}</p>
    </div>
  )
}

export default Footer