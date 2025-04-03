import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

//postcard ko display karana h
function PostCard({$id, title, featuredImage}) {
    
  return (
    //to make card clikable
    //link me dena padta h jaha se age jana h
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard