import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Movies from './Movies';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Row = ({title, fetchURL}) => {
    
    const [movie, setMovie] = useState([]);  // should be of type array
    const [like, setLike] = useState(false); 
    
    useEffect( () => {
        axios.get(fetchURL)
            .then( response => { setMovie(response.data.results);})
    });

  
    const right = useRef();

    const sliderLeft = () => { right.current.scrollLeft = right.current.scrollLeft - 500; }

    const sliderRight = () => { right.current.scrollLeft = right.current.scrollLeft + 500; }
    
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4"> {title}</h2>   
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={sliderLeft}  className="bg-white rounded-full   absolute opacity-50 hidden group-hover:block hover:opacity-100 cursor-pointer z-10" size={40}/>
                <div ref={right} id={'sidebar'} className="w-full h-full overflow-x-scroll 
                  whitespace-nowrap scroll-smooth relative scrollbar-hide" >
                    {
                        movie.map( (item, id) => (
                            <Movies item={item} id={id} />
                        ))
                    }
                </div>
                <MdChevronRight onClick={sliderRight}  className="bg-white rounded-full right-0  absolute opacity-50 hidden group-hover:block hover:opacity-100 cursor-pointer z-100" size={40}/>
            </div>
        </>
    );
}

export default Row;
