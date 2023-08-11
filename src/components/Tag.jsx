import React from 'react'
import Spinner from './Spinner';
import { useState} from 'react'
import useGif from './useGif';


export default function Tag() {
 
  const [tag , setTag] = useState('') ;
  
  // TAG KO PASS KAR RAHE FOR THE GIF ANS OTHER THINGS
  const { gif, loading, fetchData } = useGif(tag);



  // CLICK HANDLER OF THE FUNCTION ,  WHEN BUTTON CLICK . 
  function clickHandler(event) {
     fetchData(tag);
  }

  function changeHandler(event)
  {
    setTag(event.target.value); 
  }


  return (

    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">

      {/* HEADING OF THE GIF  */}
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">
        {
          tag === '' ? ('Random Text GIF') : `Random ${tag} GIF`
        }
      </h1>

      {/* IMAGE OF THE GIF */}
      {
        loading ? (<Spinner />) : <img src={gif} alt="GIF NOT FOUND" />
      }

      {/* INPUT FIELD */}
      <input type="text" placeholder="Enter text to genrate GIF" max="20"  value={tag} className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={changeHandler}  />


      {/* BUTTON OF THE GIF */}
      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold">Gentrate</button>

    </div>
  )

}
