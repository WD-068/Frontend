import { useState, useEffect } from 'react';
import Form from './components/form';
import Counter from './components/Counter';
import DisplayProducts from './components/DisplayProducts';
import DisplayPokemon from './components/DisplayPokemon';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [countDown, setCountDown] = useState(10);
  const [pause, setPause] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log(countDown);
  //     setCountDown((prev) => prev - 1)
  //   }, 1000);
  //   return () => clearTimeout(timeout)
  // });
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log(countDown);
  //   }, 4000);
  //   return () => clearTimeout(timeout);
  // }, [])

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log(countDown);
  //     setCountDown((prev) => prev - 1);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [pause])
  return (
    <>
      <h1>Hooks</h1>
      <div className='card'>
        <DisplayPokemon />
        {/* <div>{countDown}</div>
      <button onClick={() => setPause((prev) => !prev)}>Pause</button> */}
        {/* <Form /> */}
        {/* <Counter count={count} setCount={setCount} />
        <Counter count={count2} setCount={setCount2} />
        <Counter count={count3} setCount={setCount3} /> */}
      </div>
      {/* <DisplayProducts /> */}
    </>
  );
}

export default App;
