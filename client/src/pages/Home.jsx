import React from 'react'
import { useEffect, useState } from 'react'

import {Loader , Card , FormField} from '../components'


const RenderCards = ({data, title})=>{
    if(data.length > 0){
        return data.map((post) => <Card key={post._id} {...post}/>)
    }
    return (
        <div className='flex justify-center items-center'>
            <h2 className='text-[#6449ff] text-lg uppercase mt-5'>{`No ${title} found`}</h2>
        </div>
    )
}


function Home() {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');
  return (
    <div>
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
                <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                    Browser though a collection of imaginative and visually stunning creations from the community.
                </p>
            </div>

            <div className='mt-16'>
                <FormField/>
            </div>

            <div className='mt-10'> 
                {loading ? (
                    <div className='flex justify-center items-center '>
                        <Loader/>
                    </div>
                ):(
                    <>
                        {
                            searchText && (
                                <h2 className='font-medium text-[#666e75] text-xl xb-3'>
                                    Showing results for <span className='text-[#222328]'>{searchText}</span>
                                </h2>
                            )
                        }
                        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2 gap-3 mt-6'>
                            {
                                searchText ? (
                                    <RenderCards data={[]} title='search results'/>
                                ):(
                                    <RenderCards data={[]} title='posts'/>
                                )
                            }
                        </div>
                    
                    </>
                )} 
            </div>

        </section>
    </div>
  )
}

export default Home