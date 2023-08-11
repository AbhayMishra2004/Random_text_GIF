import { useState, useEffect } from 'react'
import axios from 'axios';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(tag) {
 
    const[gif , setGif] = useState('') ; 
    const [loading, setLoading] = useState(false) ; 

    // console.log(API_KEY);

  async function fetchData()
  {
    // LOADER KO TRUE KAR DO .
    setLoading(true); 

    // DATA OBJECT AS A OUTPUT 
    // YAH AIK PROMISE RETURN KARTA HAI 
    // AGAR TAG HOGA TO TAG KE SATH DHUDHNA HAI , OTHERWISE RANDOM DHUDHNA HAI 
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url) ; 

    // YAH IMAGE KE URL KO NIKAL RA HAI OBJECT SE 
    const imageSource = data.data.images.downsized_large.url ; 

    // SET KAR DENGE GIF MAI 
    setGif(imageSource) ;
    
    // LOADING KO FLSE SET KAR DO 
    setLoading(false) ; 
  }


  // USE EFFECT USE IN FIRST RENDER ONLY
  // AIK DEPEDENTCY NETLIFY MAI DALNE KE LIYE DE RAHA , JO CHANGE NA HO . 

  useEffect( () => {
    fetchData() ; 

    // YAH LINE USE KAR RAHE, OTHERWISE NETLIFY KE LIYE , DEPENDENCY DALNA JARURI HOTA HAI . 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return {gif , loading , fetchData} ; 



}
