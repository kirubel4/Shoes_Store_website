import Nike1 from "../assets/n1-min.png"
import { QIY,SIZE } from "../constant";
import Select from "./Select";
import { useState } from "react";
function ShoeDetail({shoe,onClickAdd}){
    const [form, setForm] = useState({qty:null, size:null});
    return(
        <div className="flex flex-col lg:flex-row-reverse space-y-9 dark:text-white">
            {/* shoe image */}
            <div className="flex-1 lg:-mt-32 lg:ml-28">
                <div className= "h-full flex-center bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6">
                    <img className="animate-float" src={shoe.src}/>
                </div>
            </div> 
                <div className="flex-1 space-y-6">
                    {/* shoe detail */}
                    <div className= "text-5xl font-black md:text-8xl"> 
                        {shoe.title}
                    </div>
                    <div className="font-medium md :font-xl">
                        {
                            shoe.description
                        }
                    </div>
                    <div className="flex space-x-6">
                    <div className="text-3xl font-extrabold md:text-6xl">
                        {shoe.price}
                    </div>
                    <Select value={form.qty} onChange={(qty)=> setForm({...form,qty})} title={"QTY"} options={QIY}/>
                    <Select vlaue={form.size} onChange={(size)=> setForm({...form,size})} title={"SIZE"} options={SIZE}/>
                    </div>
                    {/* shoe button and links */}
                    <div className="space-x-10">
                        <button onClick={()=> onClickAdd(shoe, form.qty, form.size)}className="dark:bg-white dark:text-black btn-press-anim rounded-lg h-14 w-44 bg-black text-white hover:bg-gray-800 active:bg-gray-600">
                            Add to Bag
                        </button>
                    
                        <a href="#"className="text-lg font-bold underline underline-offset-4">
                            View Detail
                        </a>
                    </div>
            </div>
        </div>
    )
}
export default ShoeDetail;