import { useState,useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { FaStar,FaPlay  } from "react-icons/fa";
function App() {
  const [movie,setMovie]=useState();
  const COLLECTION_ID = import.meta.env.VITE_TMDB_COLLECTION_ID
const IMG_BASE = import.meta.env.VITE_TMDB_IMAGE_URL
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const TOKEN = import.meta.env.VITE_TMDB_TOKEN
  useEffect(()=>{
    axios.get(`${BASE_URL}/collection/${COLLECTION_ID}`,{
        headers:{
          accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
        }
      }).then((data)=>{
     console.log("BASE_URL:", BASE_URL)
console.log("TOKEN:", TOKEN)
      setMovie(data.data)
    }).catch((err)=>console.log(err))
  },[])
  if (!movie) return <p>Loading...</p>
  return (
    <>
      <section className='border border-b-[#7c7c89]'>
        <div className='flex py-[20px] px-[15px] sm:px-[25px] md:px-[35px] lg:px-[50px] items-center justify-between '>
           <h3 className='uppercase text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-[#ffc400] font-bold cursor-pointer'>Star wars</h3>
        <button className='bg-gradient-to-r from-[#ffc400]  to-[#ff8c00] p-[10px] cursor-pointer p-[5px] text-[14px] font-bold text-black uppercase rounded-md'>Get Started</button>
        </div>
      
      </section>
       <section className='sm:px-[3rem] px-[2rem] md:px-[4rem] lg:px-[6rem] py-[2rem] flex items-center justify-center'>
       <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[2rem]'>
         <div className=''>
          <h3 className='flex items-center text-[14px] font-medium uppercase text-[#ffc400]'><span className='h-[1px] w-[30px] mr-[5px]  inline-block bg-[#ffc400]'></span>A Galaxy Far, Far Away</h3>
          <h1 className='text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-bold w-[100%]  text-[#ffc400] uppercase'>{movie.name}</h1>
          <h3 className='text-[#ffffff40] font-bold uppercase  text-[18px] lg:text-[24px]'>The Skywalker Saga</h3>
          <p className='w-[100%] max-w-[30rem] text-[#ffffff80] '>{movie.overview} Experience every battle, every betrayal, every triumph across the complete saga.</p>
          <div className='flex mt-[15px] gap-[20px] items-center'>
            <div>
              <h2 className='text-[#ffc400] text-[24px] lg:text-[30px] font-bold'>9</h2>
              <h4 className='text-[#ffffff4d] uppercase font-semibold text-[15px]'>Saga Films</h4>
            </div>
            <div>
              <h2 className='text-[#ffc400] text-[24px] lg:text-[30px] font-bold'>46+</h2>
              <h4 className='text-[#ffffff4d] uppercase font-semibold text-[15px]'>Years of Story</h4>
            </div>
            <div>
              <h2 className='text-[#ffc400] text-[24px] lg:text-[30px] font-bold'>8.4★</h2>
              <h4 className='text-[#ffffff4d] uppercase font-semibold text-[15px]'>Avg. Rating</h4>
            </div>
          </div>
          <button type='button' className='text-black flex mt-[20px] uppercase items-center font-bold cursor-pointer bg-gradient-to-r from-[#ffc400]  to-[#ff8c00] transition-all duration-100 hover:from-[#ff8c00] hover:to-[#ffc400] p-[10px] rounded-md'><FaPlay className='mr-3'/>Browse Collection</button>
        </div>
        <div>
          <img src={`${IMG_BASE}${movie.backdrop_path}`} className='h-[500px] object-cover' alt={movie.title}/>
        </div>
       </div>
       </section>
       <section className='md:mt-[30px] md:mx-[75px] sm:mt-[20px] sm:mx-[50px] mt-[10px] mx-[25px]  lg:mt-[50px] lg:mx-[50px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[3rem]'>
          {
            movie.parts.map((item,index)=>(
                <div key={index} className='bg-[#0e1319]  hover:bg-[#6d6d7454] rounded-lg border border-[#ffffff0f] group cursor-pointer p-[10px] duration-300 transition-all'>
         <div className='relative '>
           <img src={`${IMG_BASE}${movie.parts[index].backdrop_path}`} className='h-full rounded-lg w-full object-cover'/>
           <div className='flex bg-[#000000a6] p-[5px] hidden group-hover:flex rounded-md top-1 right-1 border border-[#ffc80059] absolute items-center gap-[10px]'>
            <div className='flex gap-[4px] items-center'>
             <span className='text-[#ffd700]'>★</span>
           <span className='text-[13px] font-medium'>{movie.parts[index].vote_average}</span>
          <span className='text-[#ffffff73] text-[11px]'>({movie.parts[index].vote_count})</span>
          </div>
         </div>
         </div>
         <div className='px-[5px] mt-[10px]'>
          <h3 className='text-[1.2rem] lg:text-[1.4rem]  uppercase mb-[10px] font-bold '>{movie.parts[index].title}</h3>
          <p className='leading-[19px] text-[14px] text-light text-[#ffffff80]'>{movie.parts[index].overview}</p>
          <div className='my-[15px] flex  gap-[5px] lg:gap-[10px]'>
            <h6 className='inline-block  text-[#ffffff8c] hover:text-[#ffc400] hover:border-[#ffc40066] hover:bg-[#ffc4000f] bg-[#ffffff0a] w-[100px]  pt-[2px] pb-[4px] px-[17px] transition-all duration-300   font-medium border rounded-2xl border-[#ffffff1a]'>Action</h6>
            <h6 className='inline-block text-[#ffffff8c] hover:text-[#ffc400] hover:border-[#ffc40066] hover:bg-[#ffc4000f] bg-[#ffffff0a] w-[120px]  pt-[2px] pb-[4px] px-[17px] transition-all duration-300   font-medium border rounded-2xl border-[#ffffff1a]'>Adventure</h6>
          </div>
          <hr className='text-[#ffffff0f]'/>
          <div className='sm:flex-row lg:flex-col flex items-center justify-between mt-[1rem]'>
            <div>
              <h4 className='text-[#ffffff4d]'>Release : <span className='font-semibold text-white'>{movie.parts[index].release_date}</span></h4>
            </div>
            <div>
              <button type='button' className='text-black flex items-center font-bold cursor-pointer bg-gradient-to-r from-[#ffc400]  to-[#ff8c00] transition-all duration-100 hover:from-[#ff8c00] hover:to-[#ffc400] p-[10px] rounded-md'><FaPlay className='mr-2'/> Watch Now</button>
            </div>
          </div>
         </div>
        </div>
            ))
          }
      
        </div>
       </section>
      <section  className='text-center text-[#ffc400] font-bold capitalize my-[30px]'>
        <p>All rights reserved.</p>
      </section>
    </>
  )
}

export default App
