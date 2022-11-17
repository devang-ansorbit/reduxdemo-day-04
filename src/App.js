import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,incrementByAmount } from './redux/counterSlice'

// const [iCount, setIConunt] = useState({ count: 1 });

// const inc = () => {
//   setIConunt({ count: iCount.count + 1 });
// };

// const dec = () => {
//   setIConunt({ count: iCount.count - 1 });
// };
function App() {
  const { count } = useSelector((state) => state.counter);
  const countDispatch = useDispatch()


  return (
    <div className='App'>
      {/* <h1> The count is: {count}</h1> */}
      <h1> The count is: {count}</h1>
      <button onClick={()=>countDispatch(increment())}>+</button>
      <button onClick={()=>countDispatch(decrement())}>-</button>
      <button onClick={()=>countDispatch(incrementByAmount(2))}>add 2</button>
    </div>
  );
}

export default App;
