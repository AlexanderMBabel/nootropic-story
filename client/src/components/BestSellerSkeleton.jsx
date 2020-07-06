import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const BestSellerSkeleton = () => {
  const items = new Array(5).fill(true);
  return (
    <div>
      {items.map((item) => (
        <SkeletonTheme className='flex flex-col items-center justify-center w-1/6 p-2 m-2'>
          <Skeleton circle={true} height={100} width={100} duration={0.7} />
          <Skeleton count={3} />
        </SkeletonTheme>
      ))}
    </div>
  );
};

export default BestSellerSkeleton;
