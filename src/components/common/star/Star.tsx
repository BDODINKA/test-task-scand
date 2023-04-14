import React, { FC } from 'react'

import style from '@/styles/Star/star.module.scss'

export const Star: FC<{ className: string | undefined }> = ({ className }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `${style.star} ${className}` : style.star}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8532 4.13112C11.2884 3.12751 12.7117 3.12752 13.1469 4.13112L15.1266 8.69665L20.0805 9.16869C21.1695 9.27246 21.6093 10.626 20.7893 11.3501L17.059 14.6438L18.1408 19.501C18.3787 20.5688 17.2272 21.4053 16.2853 20.8492L12 18.3193L7.71482 20.8492C6.77284 21.4053 5.62141 20.5688 5.85923 19.501L6.94111 14.6438L3.21082 11.3501C2.39082 10.626 2.83063 9.27246 3.91959 9.16869L8.87345 8.69665L10.8532 4.13112ZM12 6.5136L10.4735 10.034L10.2386 10.5756L9.65089 10.6316L5.83108 10.9956L8.70742 13.5353L9.14998 13.9261L9.02163 14.5023L8.18741 18.2477L11.4916 16.2969L12 15.9968L12.5084 16.2969L15.8127 18.2477L14.9784 14.5023L14.8501 13.9261L15.2927 13.5353L18.169 10.9956L14.3492 10.6316L13.7615 10.5756L13.5266 10.034L12 6.5136Z"
        fill=""
      />
    </svg>
  )
}