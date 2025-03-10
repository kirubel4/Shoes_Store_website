import Card from "./Card";
function NewArrivalSection({items,onClickCard}){
    return(
        <div className="mt-20 ">
            <div className="flex-center">
                <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
                    NEW ARRIVALS
                </div>
                </div>
                <div className="justify-between mt-10 grid gap-y-24 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map(item => 
                <Card key={item.id} item={item} onClick={onClickCard} />)} 
                </div>
            </div>
    )
}
export default NewArrivalSection;