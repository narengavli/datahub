import React from 'react';
import { useProductContext } from './../context/DataContext';
import Card from "./Card";

const TopProduct = () => {
  const { topProducts } = useProductContext();
  return (
    <div className='py-2'>
      <div className="fs-3 text-center">Top Mobiles</div>
      <div className='container d-flex justify-content-center flex-wrap py-2'>
        <Card item={topProducts} />
      </div>
    </div>
  )
}

export default TopProduct;