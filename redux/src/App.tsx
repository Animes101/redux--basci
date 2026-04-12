import './App.css'

function App() {


  const handleIncrement=()=>{

    alert("Increment button clicked")
  }


  const handleDecrement=()=>{
    alert("Decrement button clicked")
  }





  return (
    <div>
      <h1 className="header-name">Redux Toolkit</h1>

      <button onClick={handleIncrement}>Increment</button>
      <h1>{0}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
   
  )
}

export default App
