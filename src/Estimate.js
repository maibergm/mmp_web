import React, { useState } from 'react';
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
  const [formData, setFormData] = useState(clientFormData);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <div className="mb-3" >
            <label className="form-label ">Delivery Address</label>
            <textarea id="comments" name="comments" rows="5" cols="50"></textarea>
          </div>
          <div className = "address-subinfo">
            <div className="mb-3" >
              <label className="form-label ">Eircode</label>
              <input type="text" className="form-control"/>
            </div>
          <div className="mb-3" >
            <label className="form-label ">Property Type</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">Lift Available?</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3" >
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
          {renderRoomPicker()}
        </>

      )
    }
  }

  {/* IN PROGRESS */}  {/* IN PROGRESS */}  {/* IN PROGRESS */}  {/* IN PROGRESS */}
  const [selectedBedroomItems, setSelectedBedroomItems] = useState([]);
  function handleItemClick(e, item) {
    e.preventDefault();
    if (selectedBedroomItems.includes(item)) {
      setSelectedBedroomItems(selectedBedroomItems.filter((selected) => selected !== item));
    } else {
      setSelectedBedroomItems([...selectedBedroomItems, item]);
    }
  }
  function renderRoomPicker() {
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
    return (
      <div className = "survey-group">
        <div className = "button-group-test" >
            <button
              className="form-control room-button"> Bedroom
            </button>
            <button
              className="form-control room-button"> Kitchen
            </button>
            <button
              className="form-control room-button"> Office
            </button>
            <button
              className="form-control room-button"> Living Room
            </button>
            <button
              className="form-control room-button"> Garden/Balcony
            </button>
            <button
              className="form-control room-button"> Garage
            </button>
            <button
              className="form-control room-button"> Boxes & Misc
            </button>
        </div>
        <div className = "item-picker">
        {bedroomItems.map((item, index) => (
           <div className="mb-3" key={index}>
             <button
               className={`form-control item-button ${selectedBedroomItems.includes(item.name) ? 'selected' : ''}`}
               onClick={(e) => handleItemClick(e, item.name)}>{item.name}
             </button>
           </div>
         ))}
        </div>
      </div>
  );
}
  {/* IN PROGRESS */}  {/* IN PROGRESS */}  {/* IN PROGRESS */}  {/* IN PROGRESS */}

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
      <p>Title: {formData.surveyType}</p>
    </div>
  );
}
export default Estimate;
