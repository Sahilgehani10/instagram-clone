'use client'
import Masonry from "react-masonry-css"

const images = [
    'https://picsum.photos/id/22/1024/768',
    'https://picsum.photos/id/23/768/1024',
    'https://picsum.photos/id/24/1024/768',
    'https://picsum.photos/id/25/768/1024',
    'https://picsum.photos/id/26/1024/768',
    'https://picsum.photos/id/27/768/1024',
    'https://picsum.photos/id/28/1024/768',
    'https://picsum.photos/id/29/768/1024',
    'https://picsum.photos/id/30/1024/768',
    'https://picsum.photos/id/31/768/1024',
    'https://picsum.photos/id/32/1024/768',
    'https://picsum.photos/id/33/768/1024',
]
export default function Postsgrid(){
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
           
            {images.map(src =>(
                <div className="mb-4">
                    <img src={src} alt="" /> 
                </div>
            ))}
           
        
      </Masonry>
        </div>
        
    )
}