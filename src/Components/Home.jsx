import React, { useContext } from 'react'
import { Images } from '../Context'
import ShowImages from './ShowImages'
import ImageSkeleton from './Skeleton'
import '../Stylesheet/Home.css'

const Home = () => {

    const { data, query, setQuery, isLoading } = useContext(Images)

    return (
        <div>Home
            <div style={{display:'flex'}}>
                <input
                    type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

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
                    <div className='container' >
                        <div className='row'  >
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

export default Home