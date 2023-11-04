import React, { useState } from 'react';
import Navbar from './Navbar';
import './EstimatePage.css';

function EstimatePage() {
  // State variables for input values and their associated values
  const [kitchenInputs, setKitchenInputs] = useState([
    { label: 'Fridge/Freezer Upright', value: '', cost: 100 },
    { label: 'Fridge/Freezer Cabinet', value: '', cost: 200 },
    { label: 'American Style Fridge', value: '', cost: 300 },
    { label: 'Microwave', value: '', cost: 300 },
    { label: 'Large 6 Seater Table', value: '', cost: 300 },
    { label: 'Medium 4 Seater Table', value: '', cost: 300 },
    { label: 'Small 2 Seater Table', value: '', cost: 300 },
    { label: 'Chair/Stool', value: '', cost: 300 },
    { label: 'Child High Chair', value: '', cost: 300 },
    { label: 'Cooker/Oven', value: '', cost: 300 },
    { label: 'Dishwasher', value: '', cost: 300 },
    { label: 'Bin', value: '', cost: 300 },
    { label: 'Pictures', value: '', cost: 300 },
    { label: 'Washing Machine', value: '', cost: 300 },
    { label: 'Tumble Dryer', value: '', cost: 300 },
    { label: 'Linen Basket', value: '', cost: 300 },
    { label: 'Clothes Airer', value: '', cost: 300 },
    // Add more items with labels and costs as needed
  ]);

  const [bedroomInputs, setBedroomInputs] = useState([
    { label: 'King Bed', value: '', cost: 150 },
    { label: 'Queen Bed', value: '', cost: 100 },
    { label: 'Double Bed', value: '', cost: 50 },
    { label: 'Single Bed', value: '', cost: 50 },
    { label: 'Cot', value: '', cost: 50 },
    { label: 'King Mattress', value: '', cost: 50 },
    { label: 'Double Mattress', value: '', cost: 50 },
    { label: 'Bedside Cabinet', value: '', cost: 50 },
    { label: 'Table Lamp', value: '', cost: 50 },
    { label: 'Ottoman', value: '', cost: 50 },
    { label: 'Dresser', value: '', cost: 50 },
    { label: 'Chest of 5 Drawers', value: '', cost: 50 },
    { label: 'Chest of 4 Drawers', value: '', cost: 50 },
    { label: 'Chest of 3 Drawers', value: '', cost: 50 },
    { label: 'TV 32"+', value: '', cost: 50 },
    { label: 'DVD Player', value: '', cost: 50 },
    { label: 'Bookcase', value: '', cost: 50 },
    { label: 'Chair/Stool', value: '', cost: 50 },
    { label: 'Pictures', value: '', cost: 50 },
    { label: 'Mirrors', value: '', cost: 50 },
    { label: 'Chest', value: '', cost: 50 },
    { label: 'Wardrobe', value: '', cost: 50 },
    { label: 'Desk', value: '', cost: 50 },
    // Add more items with labels and costs as needed
  ]);

  const [loungeInputs, setLoungeInputs] = useState([
    { label: '2 Seater Sofa', value: '', cost: 150 },
    { label: '3 Seater Sofa', value: '', cost: 100 },
    { label: '4 Seater Sofa', value: '', cost: 50 },
    { label: 'Arm Chair', value: '', cost: 50 },
    { label: 'Footstool', value: '', cost: 50 },
    { label: 'Cabinet', value: '', cost: 50 },
    { label: 'Wall Unit', value: '', cost: 50 },
    { label: 'Bookcase', value: '', cost: 50 },
    { label: 'TV 32"+', value: '', cost: 50 },
    { label: 'DVD Player', value: '', cost: 50 },
    { label: 'Games Console', value: '', cost: 50 },
    { label: 'TV Stand', value: '', cost: 50 },
    { label: 'TV/Stereo Cabinet', value: '', cost: 50 },
    { label: 'Stereo', value: '', cost: 50 },
    { label: 'Coffee Table', value: '', cost: 50 },
    { label: 'Piano', value: '', cost: 50 },
    { label: 'Lamp', value: '', cost: 50 },
    { label: 'Heater', value: '', cost: 50 },
    { label: 'Pictures', value: '', cost: 50 },
    { label: 'Mirrors', value: '', cost: 50 },
    { label: 'Rugs', value: '', cost: 50 },
    // Add more items with labels and costs as needed
  ]);

  // Function to update input values
  const handleInputChange = (section, index, value) => {
    if (section === 'kitchen') {
      const updatedInputs = [...kitchenInputs];
      updatedInputs[index].value = value;
      setKitchenInputs(updatedInputs);
    } else if (section === 'bedroom') {
      const updatedInputs = [...bedroomInputs];
      updatedInputs[index].value = value;
      setBedroomInputs(updatedInputs);
    }
    else if (section === 'lounge') {
      const updatedInputs = [...loungeInputs];
      updatedInputs[index].value = value;
      setLoungeInputs(updatedInputs);
    }
  };

  // Calculate the total cost
  const calculateTotal = () => {
    const kitchenTotal = kitchenInputs.reduce((acc, item) => acc + item.cost * item.value, 0);
    const bedroomTotal = bedroomInputs.reduce((acc, item) => acc + item.cost * item.value, 0);
    const loungeTotal = bedroomInputs.reduce((acc, item) => acc + item.cost * item.value, 0);
    return kitchenTotal + bedroomTotal + loungeTotal;
  };

  return (
    <div className="EstimatePage">
      <Navbar />
      <h1 className = "heading"> Estimate Form </h1>

          <div className="estimate">
            <div className="section">
              <h2 classname = "section-heading">Kitchen</h2>
              {kitchenInputs.map((item, index) => (
                <div key={index} className="input-container">
                  <label>{item.label}</label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) => handleInputChange('kitchen', index, parseInt(e.target.value, 10))}
                    placeholder={`Enter ${item.label}`}
                  />
                </div>
              ))}
            </div>
            <div className="section">
              <h2 classname = "section-heading">Bedrooms</h2>
              {bedroomInputs.map((item, index) => (
                <div key={index} className="input-container">
                  <label>{item.label}</label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) => handleInputChange('bedroom', index, parseInt(e.target.value, 10))}
                    placeholder={`Enter ${item.label}`}
                  />
                </div>
              ))}
            </div>
            <div className="section">
              <h2 classname = "section-heading">Lounge</h2>
              {loungeInputs.map((item, index) => (
                <div key={index} className="input-container">
                  <label>{item.label}</label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) => handleInputChange('lounge', index, parseInt(e.target.value, 10))}
                    placeholder={`Enter ${item.label}`}
                  />
                </div>
              ))}
            </div>
            {/* Add more sections as needed */}
          </div>

      <div className="total">
        <h2>Total Volume: {calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default EstimatePage;
