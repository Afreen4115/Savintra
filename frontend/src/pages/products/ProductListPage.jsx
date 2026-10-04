import {SlidersHorizontal} from 'lucide-react'
import content from '../../data/content.json'
import { useMemo } from 'react';
import Categories from '../../components/filters/Categories';

const ProductListPage = ({categoryType}) => {
  const categories=content?.categories;

  const selectedCategory=useMemo(()=>{
    return categories.find((category)=> category.code===categoryType);
  },[categoryType,categories]);

  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[20px] border rounded-lg m-[20px]">
          {/* Filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <SlidersHorizontal />
          </div>
          <div>
            <p className="text-[16px] text-black mt-5 mb-2">Categories</p>
            <Categories types={selectedCategory?.types}  />
          </div>
          <div>
            {/* price range */}
          </div>
        </div>
        <div className="p-[40px]">
          {/* Prodcts */}
          <p className='text-black text-xl'>{selectedCategory?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage