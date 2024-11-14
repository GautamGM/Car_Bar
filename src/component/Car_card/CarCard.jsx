const CarCard=({data})=>{
    const {id,name,cost}=data

    const handleDelete=(id)=>{
        
        console.log(id,"idd")
    }
    return(
        <div className="border border-black w-[340px] h-[200px] flex  ">
            {/* c
             */}
            <div>
                <h1 className="text-[24px] font-[600]">{name}</h1>
            </div>
            <div className="w-[100%] flex flex-col justify-end ml-2">
                <h3 className="text-[18px] font-[600]">${cost}</h3>
            <button onClick={()=>handleDelete(id)} className="bg-red-950 text-white" >Delete</button>
            </div>
        </div>
    )
}
export{ CarCard} 