import React, { useContext } from 'react'
import { Images } from '../Context'


const ShowImages = ({ url }) => {

    const { isLoading } = useContext(Images)
    console.log('isLoading', isLoading)
    return (
        <div>
            <div className='my-2'  >
                <div className="card" style={{ width: "18rem", margin: '1rem 0', }}>
                    <img style={{ objectFit: 'fill', width: "17.8rem", height: '19.3rem', }} src={url} className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default ShowImages