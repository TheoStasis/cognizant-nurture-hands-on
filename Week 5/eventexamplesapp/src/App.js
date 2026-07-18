import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(5);
  const [amount, setAmount] = useState('');

  const handleIncrement = () => {
    setCounter(counter + 1);
    alert("localhost:3000 says\nHello! Member" + (counter + 1));
  };

  const handleDecrement = () => setCounter(counter - 1);
  const sayWelcome = (msg) => alert("localhost:3000 says\n" + msg);
  const handleClickMe = () => alert("localhost:3000 says\nI was clicked");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`localhost:3000 says\nConverting to Euro Amount is ${amount * 80}`); // Simple conversion
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button><br/>
      <button onClick={handleDecrement}>Decrement</button><br/>
      <button onClick={() => sayWelcome('welcome')}>Say welcome</button><br/>
      <button onClick={handleClickMe}>Click on me</button>

      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount: <input type="number" value={amount} onChange={e => setAmount(e.target.value)} /></label><br/><br/>
        <label>Currency: <textarea defaultValue="Euro" readOnly /></label><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;