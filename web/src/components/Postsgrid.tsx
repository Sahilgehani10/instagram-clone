'use client'
import { Post } from "@prisma/client"
import Masonry from "react-masonry-css"

export default function Postsgrid({posts}:{posts:Post[]}){
    return(
        <div className="max-w-7xl mx-auto">
            <Masonry
        breakpointCols={{
            default: 4,
            1024: 3,
             700: 2,
            500: 1
        }}
        className="flex -ml-4"
        columnClassName="pl-4">
           
            {posts.map(post =>(
                <div className="mb-4">
                    <img src={post.image} alt="" /> 
                </div>
            ))}
           
        
      </Masonry>
        </div>
        
    )
}