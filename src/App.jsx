import Random from "./components/Random" ; 
import Tag from "./components/Tag" ; 




export default function App() {


  
  return (

    <div className="w-full min-h-screen h-full pb-10 flex flex-col background items-center ">

        {/* HEADING OF THE  */}
         <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold"> Random GIFS </h1>

        <div className="flex w-11/12 items-center gap-x-10 mt-[30px]">
          <Random  />
          <Tag  />
        </div>


    </div>

  ) 
}
