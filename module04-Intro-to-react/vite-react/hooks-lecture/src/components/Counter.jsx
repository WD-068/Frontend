function Counter(props) {
    
  return (
    <div>
      <button onClick={() => props.setCount((prev) => prev - 1)}>-</button>
      <span>{props.count}</span>
      <button onClick={() => props.setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default Counter