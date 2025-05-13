import { useDispatch } from "react-redux";
import {errorSliceActions} from '../store/store'

export default function Card({data}) {
const dispatch = useDispatch()


const addError = (id) =>{
    dispatch(errorSliceActions.setError({
        id,
        message: 'BOX' + id,
        visible: true
    }))
}

  return (
    <div className='cardBox'>
      {data}
      <button onClick={() => addError(data)}>Trigger</button>
    </div>
  )
}
