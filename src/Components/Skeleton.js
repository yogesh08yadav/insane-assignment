import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ImageSkeleton = () => {
  return (
        <div className='my-2' >
                <div className="card" style={{ margin: '1rem 0',width:'18rem'}}>
                        <Skeleton width={280} height={300} />
                </div>
            </div>
  )
}

export default ImageSkeleton