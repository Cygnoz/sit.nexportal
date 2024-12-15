import React from 'react';
import StarFilled from '../../assets/icons/StarFilled';
import StarNotFilled from '../../assets/icons/StarNotfilled';

type Props = {
  count: 1 | 2 | 3 | 4 | 5 |any;
};

const RatingStar: React.FC<Props> = ({ count = 0 }) => {
  const totalStars = 5;

  return (
    <div className='flex items-center gap-2'>
      {
        Array.from({ length: totalStars }, (_, index) => {
          if (index < count) {
            return <StarFilled key={index} />;
          } else {
            return <StarNotFilled key={index} />;
          }
        })
      }
    </div>
  );
};

export default RatingStar;
