import React from 'react'
import useGif from './useGif';
import Spinner from './Spinner';



export default function Random() {

  const { gif, loading, fetchData } = useGif();

  // CLICK HANDLER OF THE FUNCTION ,  WHEN BUTTON CLICK . 
  function clickHandler()
  {
    fetchData() ; 
  }


  return (

    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mobile:w-full">
        
        {/* HEADING OF THE GIF  */}
        <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> A Random GIF </h1>

        {/* IMAGE OF THE GIF */}
        {
          loading ? (<Spinner />) : <img src={gif} alt="GIF NOT FOUND" />
        }
        

        {/* BUTTON OF THE GIF */}
      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold">Genrate</button>

    </div>
  )
}