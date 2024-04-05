import React,{useState} from "react";
function Test(){

    const [darkbg,toggleDMforBG] = useState("bg-white");
    const [darktext,toggleDMforT] = useState("text-black");
    const [DMon,turnOnDM] = useState(false);

    const darkModeON = () =>{
        if(DMon === false){
            toggleDMforBG("bg-black transition-colors duration-500 ease-in-out");
            toggleDMforT("text-yellow-500 transition-colors duration-500 ease-in-out");
            turnOnDM(true);
        }

        else if( DMon === true ){
            toggleDMforBG("bg-white transition-colors duration-500 ease-in-out");
            toggleDMforT("text-black-500 transition-colors duration-500 ease-in-out");
            turnOnDM(false);;
        }
    }
    
    return(

        <main className="p-5">
        <div className="absolute w-10 bg-slate-900 h-10 top-52"></div>
        <h1 className='text-center text-lg text-blue-400'>Hi</h1>
        <div className="w-12 h-12 bg-yellow-800 border-x-black rounded-md m-4 p-28">
            <p className="text-center font-mono font-extrabold text-[13px]">HELLOOOO</p>
        </div>
        <div className="flex justify-center items-center align h-[16] w-[16]  bg-slate-900  top-0">
            <div className="h-16 w-16 rounded-full bg-red-600 "></div>
            <div className="h-16 w-16 rounded-full bg-red-600 "></div>
        </div>
        <div className="grid grid-cols-3 gap-2 m-2">
            <div className="bg-blue-500 h-12 "></div>
            <div className="bg-blue-500 h-12 "></div>
            <div className="bg-blue-500 h-12 "></div>
            <div className="bg-blue-500 h-12 "></div>
            <div className="bg-blue-500 h-12 "></div>
        </div>
        <div className="md:block hidden">
            <p>I will appear for device resolution more than 768</p>
        </div>

        <div className="max-md:block hidden">
            <p>I will appear for device resolution less than 768 </p>
        </div>


        <button className="my-2 p-2 bg-yellow-400 border-2 border-black rounded-md hover:bg-yellow-600 transition-colors duration-500 ease-in-out">
            Click Me
        </button>
        <button className="my-2 p-2 bg-yellow-400 border-2 border-black rounded-md focus:bg-yellow-600 focus:ring-blue-700 transition-colors duration-500 ease-in-out">
            Click Me
        </button>

        <ul className="my-2">
            <li className="bg-white p-2 first:bg-yellow-200">item 1</li>
            <li className="bg-white p-2 second:bg-yellow-200 odd:bg-blue-500 even:bg-yellow-300">item 1</li>
            <li className="bg-white p-2 second:bg-yellow-200 odd:bg-blue-500 even:bg-yellow-300">item 1</li>
            <li className="bg-white p-2 second:bg-yellow-200 odd:bg-blue-500 even:bg-yellow-300">item 1</li>
            <li className="bg-white p-2 second:bg-yellow-200 odd:bg-blue-500 even:bg-yellow-300">item 1</li>
        </ul>
        
        <br />
        <div className={`m-10 rounded-lg  p-6 shadow-xl ring-1 ring-slate-900/20 ${darkbg}`}>
            <h3 className={`font-medium tracking-tigh ${darktext}`}>This is a text element</h3>
            <p className={`mt-2 text-sm text-slate-500 ${darktext}`}>This is an enen logner p tag element</p>

            <button  className="yellowBtn" onClick={darkModeON}>
                Toggle Dark Mode
            </button>
        </div>
        <p className="text-2xl text-chestnut bg-stone-300">Chestnut Color</p>

        <button className="advancedBBtn">
            HELLO!!
        </button>


        </main>


    );
}

export default Test