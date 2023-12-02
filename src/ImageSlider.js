import { useEffect, useState } from "react";


const data = ["https://wallpapercave.com/wp/wp2032581.jpg","https://www.teahub.io/photos/full/300-3005220_virat-kohli-image-in-world-cup-2019.jpg",
"https://images.newindianexpress.com/uploads/user/imagelibrary/2023/11/15/original/Kohli_AP23319445504001.jpg?w=400&dpr=2.6",
"https://qph.cf2.quoracdn.net/main-qimg-5034dc275e4e02b49324e0c96e2b01c3-lq",
"https://sportscafe.in/img/es3-y1/articles/Cricket_1/Virat_Kohli_IND_VS_NZ_Getty.jpg"
]

const ImageSlider = () =>{

    const [activeImageIndex, setActiveImageIndex]= useState(0);

   
    
    const handleNextClick = () =>{
      
        setActiveImageIndex((activeImageIndex+1) % data.length);
    }

    const handlePrevClick = () =>{
        if(activeImageIndex===0) setActiveImageIndex(data.length-1)
        else
        setActiveImageIndex(activeImageIndex-1);
    }

    useEffect(() =>{
        setTimeout(() => {
           handleNextClick(); 
        }, 2000);
        clearInterval();
    },[activeImageIndex]);

    return(
        <>
    <div className="flex justify-center">
    <button onClick={()=>{
        handlePrevClick();
    }} className=" rounded-lg text-white bg-blue-600 font-bold p-2 m-10 w-24 h-12 mt-20 border-solid border-2 border-sky-500   ">Previous</button>
      <img className="w-96 mt-0 h-96 object-cover" src={data[activeImageIndex]} alt="VK"/>
    <button onClick={()=>{
        handleNextClick();
    }} className=" rounded-lg font-bold p-2 m-10 w-24 h-12 mt-20 border-solid border-2 border-black-600 bg-blue-600 text-white ">Next</button>
    </div>
    <div className="flex justify-center">
    <button onClick={()=>{
        <a href="https://www.icc-cricket.com/video/3786451" target="_blank">Vyyrat</a>
    }} className="mt-10 w-96 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300" >50th Odi Hundred</button>
    </div>
    </>
    )
}

export default ImageSlider;