import { changeSearchString } from "../../slices/CarSlice"
import { useDispatch } from "react-redux"
const CarSearch=()=>{
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        dispatch(changeSearchString(e.target.value))
    }
    return(
       <div>
        <div className="search_bar flex justify-end mr-5">
            <input type="text" placeholder="search her ...." onChange={handleChange} className="border border-black p-1 mt-2 w-[300px] " />
        </div>
       </div>
    )
}
export  {CarSearch}