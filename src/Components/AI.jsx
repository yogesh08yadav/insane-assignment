import React, { useContext, useEffect } from 'react'
import { Images } from '../Context'
import ShowImages from './ShowImages'
import ImageSkeleton from './Skeleton'

const AI = () => {

    const { data, query, setQuery, isLoading } = useContext(Images)
    useEffect(()=>{
        setQuery('AI')
    },[])
   
    return (
        <div>

            {
                isLoading ?
                    <div className='container'>
                        <div className='row'>
                        {data.map((elem) => {
                                return <div className="col-md-4" key={elem.id}> 
                               <ImageSkeleton  />
                                </div>
                            })}

                        </div>
                    </div>
                    :
                    <div className='container'>
                        <div className='row'>
                            {
                                data.map((elem) => {
                                    var url = 'https://farm' + elem.farm + '.staticflickr.com/' + elem.server + '/' + elem.id + '_' + elem.secret + '.jpg'
                                    return <div className="col-md-4" key={elem.id}> 
                                    <ShowImages key={elem.id} elem={elem} url={url} />
                                    </div>
                                })
                            }
                        </div>
                    </div>

            }

        </div>
    )
}

export default AI