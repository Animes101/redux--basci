
import './App.css'
import { decrement, increment } from './redux/fetures/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/fetures/hooks';

function App() {

  const dispatch=useAppDispatch();

  const counter=useAppSelector((state)=>state.counter )


  const handleIncrement=()=>{

    dispatch(increment(5))
  }

  const handleDecrement=()=>{
    dispatch(decrement(5))
  }
  

  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <h3>{counter.value}</h3>
      <button onClick={handleDecrement} >decrement</button>
    </div>
  
  )
}

export default App
