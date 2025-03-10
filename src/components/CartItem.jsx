import {CiTrash} from "react-icons/ci"
import Select from "./Select";
import { SIZE,QIY } from "../constant";
function CartItem({item: {product,qty,size},onClickTrash}){    
    return (
        <div className="dark:bg-transparent cursor-pointer mt-4 hover:bg-[#DAFFA2] bg-gray-50 dark:hover:bg-night-50">
            <div className="flex  space-x-2 ">
                <img className="h-24" src= {product.src}  />
                <div className= "space-y-2">
                    <div className="font-bold dark:text-white ">{product.title}</div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                </div>
                <div className= {"font-bold dark:text-white"}>{product.price}</div>
            </div>
                <div className="flex justify-between pl-32">
                    <div className="flex space-x-6">
                        <div>
                            <div className="font-bold dark:text-white ">SIZE</div>
                            <Select 
                            value ={size}
                            title= "" options={SIZE}
                            className ={"w-16 p-1 pl-2"}/>
                        </div>
                        <div>
                            <div className="font-bold dark:text-white ">QIY</div>
                            <Select
                            value ={qty} 
                            title="" options={QIY}
                            className ={"w-16 p-1 pl-2"}/>
                        </div>
                    </div>
                    <button onClick={()=> onClickTrash(product.id)}>
                        <CiTrash size={25} className="text-black dark:text-white" />
                    </button>
                </div>
        </div>
    )
}
export default CartItem;