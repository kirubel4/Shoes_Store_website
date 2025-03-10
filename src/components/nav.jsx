import { BsCart3 } from "react-icons/bs"; 
import {React,useState} from "react";
import NikeLogo from "../assets/nike-logo.svg?react "
import {RxHamburgerMenu} from "react-icons/rx"
function Nav({onClickShopingBtn}){
    const Routes = ["Home", "About", "Services", "Pricing", "Contact"]
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
    function handleClick(){
        setIsMobileMenuShown(!isMobileMenuShown)
    }
    return (
        <nav className="z-10 relative flex flex-wrap items-center justify-between " >
            <a href="#">  
                <NikeLogo className="h-20 w-20 dark:fill-white"/>
            </a>
            <button onClick={handleClick} className="dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 lg:hidden">
                <RxHamburgerMenu size={25} />
            </button>
            {/* menu list */}
            <div  className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}>
            <ul className="lg:space-x-8 lg:flex text-lg bg-gray-50 p-4 rounded-lg border lg:border-none border-gray-100 lg:bg-transparent">
                {Routes.map((route, i) => (
                    <li className={`lg:hover:bg-transparent lg:hover:text-blue-500 rounded cursor-pointer py-2 px-3 ${i === 0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100 lg:dark:text-white"}
                        ${(i==3 || i== 4) && "lg:text-white"}
                    `} key={route}>
                        {route}
                    </li>
                ))}
            </ul>
            </div>
            {/* cart button */}
            <div 
            onClick={onClickShopingBtn}
            className="fixed bottom-4 left-4 lg:static lg:mr-8 ">
                <div>
                    <button className="btn-press-anim hover:bg-gray-100 flex-center h-12 w-12 rounded-full bg-white shadow-md">
                        <BsCart3 />
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Nav;