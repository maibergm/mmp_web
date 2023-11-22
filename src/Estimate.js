import React, { useState } from 'react';
import Select from 'react-select'
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import './Estimate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Estimate() {

  const clientFormData = {
    title: '',
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    pickupAdd: '',
    pickupEir: '',
    pickupProp: '',
    pickupLift: '',
    pickupDate: '',
    pickupAccessToEntrance: '',
    pickupAdditionalInfo: '',
    deliveryAccessToEntrance: '',
    deliveryAdditionalInfo: '',
    packingService:'',
    boxSupply:'',
    boxSupplySmall:'',
    boxSupplyMedium:'',
    boxSupplyLarge:'',
    boxSupplyWardrobe:'',
    surveyType:'',
  };
  const extraItemList = [
    { value: 'Bicycle', label: 'Bicycle' },
    { value: 'Tent', label: 'Tent' },
    { value: 'Sleeping Bag', label: 'Sleeping Bag' },
    { value: 'Toy Car', label: 'Toy Car' },
    { value: 'Ladder', label: 'Ladder' },
    // Add more options as needed
  ];
  const [formData, setFormData] = useState(clientFormData);
  const [extraBedroomItems, setExtraBedroomItems] = useState([]);
  const [extraKitchenItems, setExtraKitchenItems] = useState([]);
  const [extraOfficeItems, setExtraOfficeItems] = useState([]);
  const [extraLivingRoomItems, setExtraLivingRoomItems] = useState([]);
  const [extraDiningRoomItems, setExtraDiningRoomItems] = useState([]);
  const [extraOutsideItems, setExtraOutsideItems] = useState([]);
  const [extraBathroomItems, setExtraBathroomItems] = useState([]);
  const [extraMiscItems, setExtraMiscItems] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState(["Bedroom"]);
  const [pickedItems, setPickedItems] = useState({});
  const [extraItems, setExtraItems] = useState({});

  {/* Button Clicker Handlers */}
  function addItem(event, itemName) {
  if (!pickedItems.hasOwnProperty(itemName)) {
    // Update the state with the new value for the specific itemName
    setPickedItems((prevPickedItemValue) => ({
      ...prevPickedItemValue,
      [itemName]: 1,
    }));
  }
  else {
    let newValue = pickedItems[itemName];
    newValue = newValue + 1;
    setPickedItems((prevPickedItemValue) => ({
      ...prevPickedItemValue,
      [itemName]: newValue,
    }));
  }
}
  function addExtraItem(item, itemArray, setItemArray) {
    if (!itemArray.hasOwnProperty(item)) {
      setItemArray((prevExtraItem) => ({
        ...prevExtraItem,
        [item]: 1,
      }));
    }
    else {
      let newValue = itemArray[item];
      newValue = newValue + 1;
      setItemArray((prevExtraItem) => ({
        ...prevExtraItem,
        [item]: newValue,
      }));
    }
  }
  function subItem(event, itemName) {
    event.preventDefault();
    if (!pickedItems.hasOwnProperty(itemName)) {

    }
    else {
      let newValue = pickedItems[itemName];
      newValue = newValue - 1;
      if(newValue === 0) {
        const newpickedItems = { ...pickedItems };
        delete newpickedItems[itemName];

        // Update the state with the new object
        setPickedItems(newpickedItems);
      }
      else {
        setPickedItems((prevPickedItemValue) => ({
          ...prevPickedItemValue,
          [itemName]: newValue,
        }));
      }
    }
  }
  function subExtraItem(event, item, itemArray, setItemArray) {
    event.preventDefault();
    if (!itemArray.hasOwnProperty(item)) {

    }
    else {
      let newValue = itemArray[item];
      newValue = newValue - 1;
      if(newValue === 0) {
        const newpickedItems = { ...itemArray };
        delete newpickedItems[item];

        // Update the state with the new object
        setItemArray(newpickedItems);
      }
      else {
        setItemArray((prevPickedItemValue) => ({
          ...prevPickedItemValue,
          [item]: newValue,
        }));
      }
    }
  }

  function handleQtyChange(event, itemName) {
    let valueCheck = parseInt(event.target.value, 10);
    if(!isNaN(valueCheck) && valueCheck >= 0) {
      if (event.target.value === '0') {
      // Create a copy of the pickedItems object without the specified key
        const newpickedItems = { ...pickedItems };
        delete newpickedItems[itemName];

        // Update the state with the new object
        setPickedItems(newpickedItems);
      }
      else {
        const { value } = event.target;

        // Update the state with the new value for the specific itemName
        setPickedItems((prevPickedItemValue) => ({
          ...prevPickedItemValue,
          [itemName]: value,
        }));
      }
    }
  }
  function handleExtraItemQtyChange(event, item, itemArray, setItemArray) {
    let valueCheck = parseInt(event.target.value, 10);
    if(!isNaN(valueCheck) && valueCheck >= 0) {
      if (event.target.value === '0') {
      // Create a copy of the pickedItems object without the specified key
        const newpickedItems = { ...itemArray };
        delete newpickedItems[item];

        // Update the state with the new object
        setItemArray(newpickedItems);
      }
      else {
        const { value } = event.target;

        // Update the state with the new value for the specific itemName
        setItemArray((prevPickedItemValue) => ({
          ...prevPickedItemValue,
          [item]: value,
        }));
      }
    }
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleRoomClick(e,room) {
     e.preventDefault();
    if (selectedRooms.includes(room)) {

    } else {
      setSelectedRooms([room]);
    }
  }

  function personalInformation() {
    return (
      <div>
        <h5 className = "form-subheading">Your personal details: </h5>
        <div className = "customer-name">
          <div className="mb-3 input-boxes">
              <label className="form-label ">Title </label>
              <input type="text" className="form-control" name = "title" value={formData.title} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">First Name</label>
            <input type="text" className="form-control" name = "firstName" value={formData.firstName} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Surname</label>
            <input type="text" className="form-control" name = "surname" value={formData.surname} onChange={handleInputChange}/>
          </div>
        </div>
        <div className = "customer-email">
          <div className="mb-3 input-boxes" >
            <label className="form-label ">E-mail</label>
            <input type="email" className="form-control" name = "email" value={formData.email} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Phone Number</label>
            <input type="tel" className="form-control" name = "phone" value={formData.phone} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
    )
  }
  function pickupInformation() {
    return (
      <div>
        <h5 className = "form-subheading">Pickup Information </h5>
        <div className = "address">
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Pickup Address</label>
            <textarea rows="5" cols="50" name = "pickupAdd" value={formData.pickupAdd} onChange={handleInputChange}></textarea>
          </div>
        <div className = "address-subinfo">
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Eircode</label>
            <input type="text" className="form-control" name="pickupEir" value={formData.pickupEir} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
              <label className="form-label ">Property Type</label>
              <input type="text" className="form-control" name = "pickupProp" value={formData.pickupProp} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Lift Available?</label>
            <input type="text" className="form-control" name="pickupLift" value={formData.pickupLift} onChange={handleInputChange}/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Date moving</label>
            <input type="date" className="form-control" name= "pickupDate" value={formData.pickupDate} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
        <div className="mb-3">
          <label className="form-label"> Is there good access for a removals vehicle leading up to the entrance of the building? </label>
          <select className="form-control" name="pickupAccessToEntrance" value={formData.pickupAccessToEntrance} onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {pickupAdditionalInfo()}
      </div>
    )
  }
  function pickupAdditionalInfo() {
      if (formData.pickupAccessToEntrance === 'No') {
        return (
          <div className="mb-3">
            <label className="form-label">Please describe the access issues</label>
            <input
              type="text"
              className="form-control"
              name="pickupAdditionalInfo"
              value={formData.pickupAdditionalInfo}
              onChange={handleInputChange}
            />
          </div>
        );
      }
      return null; // Return null when "No" is selected
    }
  function deliveryInformation() {
    return(
      <div>
        <h5 className = "form-subheading">Delivery Information </h5>
        <div className = "address">
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Delivery Address</label>
            <textarea id="comments" name="comments" rows="5" cols="50"></textarea>
          </div>
          <div className = "address-subinfo">
            <div className="mb-3 input-boxes" >
              <label className="form-label ">Eircode</label>
              <input type="text" className="form-control"/>
            </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Property Type</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Lift Available?</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3 input-boxes" >
            <label className="form-label ">Date moving</label>
            <input type="date" className="form-control"/>
          </div>
        </div>
      </div>
        <div className="mb-3">
        <label className="form-label"> Is there good access for a removals vehicle leading up to the entrance of the building? </label>
        <select className="form-control" name="deliveryAccessToEntrance" value={formData.deliveryAccessToEntrance} onChange={handleInputChange}>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    {deliveryAdditionalInfo()}
  </div>
  )}
  function deliveryAdditionalInfo() {
      if (formData.deliveryAccessToEntrance === 'No') {
        return (
          <div className="mb-3">
            <label className="form-label">Please describe the access issues</label>
            <input
              type="text"
              className="form-control"
              name="deliveryAdditionalInfo"
              value={formData.deliveryAdditionalInfo}
              onChange={handleInputChange}
            />
          </div>
        );
      }
      return null; // Return null when "No" is selected
    }
  function packingInformation() {
    return (
      <div>
        <h5 className = "form-subheading">Packing Information </h5>
        <div className="mb-3">
          <label className="form-label"> Will you require a packing service? </label>
          <select className="form-control" name="packingService" value={formData.packingService} onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
      </div>
      <div className="mb-3">
        <label className="form-label"> Do you want us to supply boxes for self packing? </label>
        <select className="form-control" name="boxSupply" value={formData.boxSupply} onChange={handleInputChange}>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {boxSupply()}
    </div>
    )
  }
  function boxSupply() {
      if (formData.boxSupply === 'Yes') {
        return (
          <div className = "boxSupplyAmount">
            <div className="mb-3 input-boxes">
            <label className="form-label"> Small Boxes <span className="small-text"> (16"x12"x12")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplySmall"
              value={formData.boxSupplySmall}
              onChange={handleInputChange}
              />
            </div>
          <div className="mb-3 input-boxes">
            <label className="form-label">Medium Boxes <span className="small-text"> (18"x18"x16")</span> </label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyMedium"
              value={formData.boxSupplyMedium}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 input-boxes">
            <label className="form-label">Large Boxes <span className="small-text"> (18"x18"x24")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyLarge"
              value={formData.boxSupplyLarge}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 input-boxes">
            <label className="form-label">Wardrobe Boxes <span className="small-text"> (24"x21"x48")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyWardrobe"
              value={formData.boxSupplyWardrobe}
              onChange={handleInputChange}
            />
          </div>
        </div>
      );
    }
    return null; // Return null when "No" is selected
  }

  function survey() {
    return (
      <>
        <h5 className = "form-subheading">Survey </h5>
        <div className="survey-list">
          <div className="mb-3">
            <label className="form-label"> Do you want to book a survey or do a self survey? </label>
            <select className="form-control" name="surveyType" value={formData.moveType} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="bookSurvey">Book a survey</option>
              <option value="selfSurvey">Self Survey</option>
            </select>
          </div>
        </div>
        {surveyBooking()}
        {selfSurvey()}
      </>
    )
  }
  function surveyBooking() {
    if(formData.surveyType === "bookSurvey") {
      return(
        <div className = "surveyBooking">
          <label>When do you want us to come and survey your property?</label>
          <input className = "form-control" type="date" ></input>
        </div>
      )
    }
  }
  function selfSurvey() {
    if(formData.surveyType === "selfSurvey") {
      return(
        <>
          {renderItemPicker()}
        </>

      )
    }
  }
  {/*Item picker for each room */}
  function bedroomItemPicker() {
    const bedroomItems = [
      { name: "Bunk Bed", volume: 35 },
      { name: "Chest of Drawers", volume: 20 },
      { name: "Triple Wardrobe", volume: 40 },
      { name: "Double Wardrobe", volume: 30 },
      { name: "Single Wardrobe", volume: 20 },
      { name: "Chaise Longue", volume: 25 },
      { name: "Futon", volume: 20 },
      { name: "Toddler Bed", volume: 15 },
      { name: "Baby changing unit", volume: 10 },
      { name: "Cot", volume: 15 },
      { name: "Play Pen", volume: 15 },
      { name: "Occasional Chair", volume: 10 },
      { name: "Trunk", volume: 15 },
      { name: "Indoor Plant", volume: 5 },
      { name: "Ottoman box", volume: 10 },
      { name: "Bedside Cabinet", volume: 10 },
      { name: "Clothes Basket", volume: 5 },
      { name: "Child's chair", volume: 5 },
      { name: "Suitcase", volume: 10 },
      { name: "Mirror", volume: 5 },
      { name: "Toy House", volume: 10 },
      { name: "Plastic toy", volume: 5 },
      { name: "Bookcase", volume: 15 },
      { name: "PC Desk", volume: 15 },
      { name: "Chair", volume: 5 },
      { name: "Standing lamp", volume: 5 },
      { name: "Cheval Mirror", volume: 15 },
      { name: "Trouser Press", volume: 10 },
      { name: "Cube shelving unit", volume: 10 },
      { name: "Child's Table", volume: 10 },
      { name: "Picture", volume: 5 },
    ];
    if(selectedRooms.includes("Bedroom")) {
      return(
        <div className = "item-picker">
          {bedroomItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraBedroomItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraBedroomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraBedroomItems,setExtraBedroomItems)}
                  onClick={(e) =>  addExtraItem(item, extraBedroomItems, setExtraBedroomItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraBedroomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraBedroomItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraBedroomItems, setExtraBedroomItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraBedroomItems, setExtraBedroomItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function kitchenItemPicker() {
    const kitchenItems = [
      { name: "Kitchen Table", volume: 35 },
      { name: "Chair", volume: 20 },
      { name: "Fridge", volume: 40 },
      { name: "Fridge Freezer", volume: 30 },
      { name: "Tumble Dryer", volume: 20 },
      { name: "Washing Machine", volume: 25 },
      { name: "Oven", volume: 20 },
      { name: "Microwave", volume: 15 },
      { name: "Shelving Unit", volume: 10 },
      { name: "Bin", volume: 15 },
      { name: "Vacuum Cleaner", volume: 15 },
    ];
    if(selectedRooms.includes("Kitchen")) {
      return(
        <div className = "item-picker">
          {kitchenItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraKitchenItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraKitchenItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraKitchenItems,setExtraKitchenItems)}
                  onClick={(e) =>  addExtraItem(item, extraKitchenItems, setExtraKitchenItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraKitchenItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraKitchenItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraKitchenItems, setExtraKitchenItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraKitchenItems, setExtraKitchenItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function officeItemPicker() {
    const officeItems = [
      { name: "Desk", volume: 35 },
      { name: "Office Chair", volume: 20 },
      { name: "Pedestal", volume: 40 },
      { name: "Filing Cabinet", volume: 30 },
      { name: "Desktop Computer", volume: 20 },
      { name: "Printer", volume: 25 },
    ];
    if(selectedRooms.includes("Office")) {
      return(
        <div className = "item-picker">
          {officeItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraOfficeItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraOfficeItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraOfficeItems,setExtraOfficeItems)}
                  onClick={(e) =>  addExtraItem(item, extraOfficeItems, setExtraOfficeItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraOfficeItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraOfficeItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraOfficeItems, setExtraOfficeItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraOfficeItems, setExtraOfficeItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function livingRoomItemPicker() {
    const livingRoomItems = [
      { name: "2 Seater Sofa", volume: 35 },
      { name: "3 Seater Sofa", volume: 20 },
      { name: "Armchair", volume: 40 },
      { name: "Coffee Table", volume: 30 },
      { name: "TV", volume: 20 },
      { name: "TV Unit", volume: 25 },
      { name: "Side Tables", volume: 20 },
      { name: "Book Case", volume: 15 },
      { name: "Rug", volume: 10 },
      { name: "Artwork", volume: 15 },
      { name: "Lamps", volume: 15 },
    ];
    if(selectedRooms.includes("Living Room")) {
      return(
        <div className = "item-picker">
          {livingRoomItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraLivingRoomItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraLivingRoomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item, extraLivingRoomItems,setExtraLivingRoomItems)}
                  onClick={(e) =>  addExtraItem(item, extraLivingRoomItems, setExtraLivingRoomItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraLivingRoomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraLivingRoomItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraLivingRoomItems, setExtraLivingRoomItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraLivingRoomItems, setExtraLivingRoomItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function diningRoomItemPicker() {
    const diningRoomItems = [
      { name: "6 Person Dining Table", volume: 35 },
      { name: "8+ Person Dining Table", volume: 20 },
      { name: "Dining Chairs", volume: 40 },
      { name: "Display Unit", volume: 30 },
      { name: "Side Board", volume: 20 },
      { name: "Rug", volume: 25 },
    ];
    if(selectedRooms.includes("Dining Room")) {
      return(
        <div className = "item-picker">
          {diningRoomItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraDiningRoomItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraDiningRoomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraDiningRoomItems,setExtraDiningRoomItems)}
                  onClick={(e) =>  addExtraItem(item, extraDiningRoomItems, setExtraDiningRoomItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraDiningRoomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraDiningRoomItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraDiningRoomItems, setExtraDiningRoomItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraDiningRoomItems, setExtraDiningRoomItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function outsideGarageItemPicker() {
    const outsideItems = [
      { name: "Garden Table", volume: 35 },
      { name: "Chairs", volume: 20 },
      { name: "Bench", volume: 40 },
      { name: "Parasol", volume: 30 },
      { name: "Lawn Mower", volume: 20 },
      { name: "Barbecue", volume: 25 },
      { name: "Bicycle", volume: 20 },
      { name: "Trampoline", volume: 40 },
      { name: "Swing Set", volume: 30 },
      { name: "Play House", volume: 20 },
      { name: "Tool Chest", volume: 25 },
      { name: "Extendable Ladder", volume: 20 },
    ];
    if(selectedRooms.includes("Outside")) {
      return(
        <div className = "item-picker">
          {outsideItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraOutsideItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraOutsideItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraOutsideItems,setExtraOutsideItems)}
                  onClick={(e) =>  addExtraItem(item, extraOutsideItems, setExtraOutsideItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraOutsideItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraOutsideItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraOutsideItems, setExtraOutsideItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraOutsideItems, setExtraOutsideItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function bathroomItemPicker() {
    const bathroomItems = [
      { name: "Bathroom Cabinet", volume: 35 },
      { name: "Storage Units", volume: 20 },
      { name: "Mirror", volume: 40 },
      { name: "Bath", volume: 30 },
      { name: "Sink", volume: 20 },
      { name: "Rug", volume: 25 },
    ];

    if(selectedRooms.includes("Bathroom")) {
      return(
        <div className = "item-picker">
          {bathroomItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraBathroomItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraBathroomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraBathroomItems,setExtraBathroomItems)}
                  onClick={(e) =>  addExtraItem(item, extraBathroomItems, setExtraBathroomItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraBathroomItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraBathroomItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraBathroomItems, setExtraBathroomItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraBathroomItems, setExtraBathroomItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }
  function miscItemPicker() {
    const miscItems = [
      { name: "Wardrobe Boxes", volume: 35,qty:1 },
      { name: "Large Boxes", volume: 20,qty:0 },
      { name: "Medium Boxes", volume: 40,qty:0 },
      { name: "Small Boxes", volume: 30,qty:0 },
      { name: "Paintings", volume: 20 ,qty:0},
      { name: "Pool Table", volume: 25,qty:0 },
      { name: "Treadmill", volume: 20,qty:0 },
      { name: "Fish Tank", volume: 40 ,qty:0},
    ];
    if(selectedRooms.includes("Misc")) {
      return(
        <div className = "item-picker">
          {miscItems.map((item, index) => (
             <div className="item-list" key={index}>
               <button
                 className={`item-desc ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                 onContextMenu={(e) => subItem(e, item.name)}
                 onClick={(e) => addItem(e, item.name)}>{item.name}
               </button>
                <input
                  className = {`qty-button ${pickedItems.hasOwnProperty(item.name) ? 'selected' : ''}`}
                  type="number"
                  value={pickedItems[item.name] || ''}
                  name="inputValue"
                  onChange={(e) => handleQtyChange(e, item.name)}
                />
             </div>
           ))}
            {Object.keys(extraMiscItems).map((item, index) => (
              <div className="item-list">
                <button
                  className={`item-desc ${extraMiscItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  onContextMenu={(e) => subExtraItem(e, item,extraMiscItems,setExtraMiscItems)}
                  onClick={(e) =>  addExtraItem(item, extraMiscItems, setExtraMiscItems)}>{item}
                </button>
                <input
                  className = {`qty-button ${extraMiscItems.hasOwnProperty(item) ? 'selected' : ''}`}
                  type="number"
                  value={extraMiscItems[item] || ''}
                  name="inputValue"
                  onChange={(e) => handleExtraItemQtyChange(e, item, extraMiscItems, setExtraMiscItems)}
                />
              </div>
            ))}
           <Select
             className="additional-item-dropdown"
             placeholder="Add additional items.."
             name="color"
             options={extraItemList}
             onChange={(selectedOption) => {
                const selectedItem = selectedOption.value;
                addExtraItem(selectedItem, extraMiscItems, setExtraMiscItems); // Pass the selected value to your addExtraItem function
              }}
           />
           <textarea
             className="form-control"
             name="textareaInput"
             rows="2"
             cols="50"
             placeholder="Enter any additional items not found..">
           </textarea>
        </div>
      )
    }
  }

  function renderItemPicker() {
    return (
      <>
        <h5 className = "form-subheading">Inventory </h5>
        <label className="form-label"> Choose all the items that you want to bring </label>
        <div className = "survey-group">
          <div className = "room-picker-button" >
            <button
              className={` room-button ${selectedRooms.includes('Bedroom') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Bedroom')}>Bedroom
            </button>
            <button
              className={` room-button ${selectedRooms.includes('Kitchen') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Kitchen')}>Kitchen
            </button>
            <button
              className={` room-button ${selectedRooms.includes('Living Room') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Living Room')}>Living Room
            </button>
            <button
              className={` room-button ${selectedRooms.includes('Dining Room') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Dining Room')}>Dining Room
            </button>
            <button
              className={`room-button ${selectedRooms.includes('Outside') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Outside')}>Garage/Garden
            </button>
            <button
              className={`room-button ${selectedRooms.includes('Bathroom') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Bathroom')}>Bathroom
            </button>
            <button
              className={`room-button ${selectedRooms.includes('Misc') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Misc')}>Boxes & Misc
            </button>
            <button
              className={`room-button ${selectedRooms.includes('Office') ? 'selected' : ''}`}
              onClick={(e) => handleRoomClick(e, 'Office')}>Office
            </button>
          </div>
          {bedroomItemPicker()}
          {kitchenItemPicker()}
          {officeItemPicker()}
          {livingRoomItemPicker()}
          {diningRoomItemPicker()}
          {outsideGarageItemPicker()}
          {bathroomItemPicker()}
          {miscItemPicker()}
        </div>
      </>
  );
}

  return (
    <div className = "Estimate">
      <Navbar/>
      <h1 className = "heading"> Estimate Form </h1>
      <div className = "form">
        {personalInformation()}
        {pickupInformation()}
        {deliveryInformation()}
        {packingInformation()}
        {survey()}
      </div>
      {Object.keys(pickedItems).map((itemName, index) => (
        <div key={index}>
          <p>{itemName}: {extraMiscItems[itemName]}</p>
        </div>
      ))}
      <p>addy: {selectedRooms[0]}</p>

    </div>
  );
}
export default Estimate;
