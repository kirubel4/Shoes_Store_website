function SideBar({children,isOpen,onClickClose}){
    return (
        <div>
            <div className={`p-4  dark:bg-night overflow-y-auto fixed right-0 top-0 z-50 h-full w-full shadow-lg md:w-[50%] lg:w-[35%] transform bg-white transition duration-300 ${isOpen ? "translate-x-0": "translate-x-full"}`}>
                <button onClick={onClickClose} className="absolute right-4 top-4 p-2 front-bold text-black dark:text-white">
                    X
                </button>  
                {children}
            </div>
        {isOpen && <div className="fixed left-0 w-full top-0 z-20 h-full bg-black opacity-50" />}
        </div>
    )
}
export default SideBar; 