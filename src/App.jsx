import Nav from "./components/nav"
import ShoeDetail from "./components/ShoeDetail"
import  {SHOES} from "./constant"
import NewArrivalSection from "./components/NewArivalSection"
import SideBar from "./components/SideBar"
import {React,useState,useEffect} from "react";
import Cart from "./components/Cart";
import {BiMoon,BiSun} from "react-icons/bi"

const FAKE_CART_ITEMS = SHOES.map(shoe=>{
  return{
    product : shoe,
    qty :1,
    size : 44
  }
})
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOES[1]);
  const [cartItems, setCartItems] = useState([])
  useEffect(()=>{
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode === "true"){
      window.document.documentElement.classList.add("dark")
    }
  },[])
  const toggleDarkMode = () => {
    const isDark = window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDark);
    
  };
  const removeFromCart = (productId) =>{
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(item => item.product.id === productId)
    updatedCartItems.splice(existingItemIndex,1);
    setCartItems(updatedCartItems)
  } 
  const addToCart =(product,qty,size) =>{
    if(qty && size){
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id)
      if(existingItemIndex >-1){
        updatedCartItems[existingItemIndex].qty= qty;
        updatedCartItems[existingItemIndex].size = size;

      }else{
        updatedCartItems.push({product,qty,size});
      }
      setCartItems(updatedCartItems);
    }
    
  }
  return <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
   <Nav onClickShopingBtn= {()=>setIsSideBarOpen(true)}/>
   <ShoeDetail shoe={currentShoe} onClickAdd={addToCart}/>
   <NewArrivalSection items={SHOES} onClickCard={setCurrentShoe}/>
   <SideBar isOpen= {isSideBarOpen} onClickClose={()=>setIsSideBarOpen(false)}
    >
      <Cart cartItems={cartItems} onClickTrash={removeFromCart}/>
    </SideBar>

    <div className={"fixed bottom-4 right-4"}>
      <button onClick ={toggleDarkMode} className="shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night">
        <BiSun className="hidden dark:block"/>
        <BiMoon className="dark:hidden"/>
      </button>
    </div>
      
  </div>
  }

export default App
  