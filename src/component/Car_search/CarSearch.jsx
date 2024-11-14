import { changeSearchString } from "../../slices/CarSlice"
import { useDispatch,useSelector } from "react-redux"
const CarSearch=()=>{
    const dispatch=useDispatch()

    const searchstring=useSelector((state)=>state.car.searchstring)
    const handleChange=(e)=>{
        dispatch(changeSearchString(e.target.value))
    }
    return(
       <div>
        <div className="search_bar flex justify-end mr-5">
            <input type="text" value={searchstring} placeholder="search her ...." onChange={handleChange} className="border border-black p-1 mt-2 w-[300px] " />
        </div>
       </div>
    )
}
export  {CarSearch}