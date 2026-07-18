import React from 'react';

function App() {
  const element = "Office Space";
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"; // Placeholder image
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('red');
  } else {
    colors.push('green');
  }

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={{ color: colors[0] }}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;