import React, { useState } from 'react';
import Navbar from './Navbar';
import './Estimate.css';
import 'react-tooltip/dist/react-tooltip.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { Modal, Button, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function Estimate() {
  const initialFormData = {
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
  const [bedModal, setBedModal] = useState('Bed');
  const [bedPartModal, setBedPartModal] = useState('');
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedBedroomItems, setSelectedBedroomItems] = useState([]);
  const [selectedBeds,setSelectedBeds] = useState ([]);
  const [selectedBedParts,setSelectedBedParts] = useState ([]);
  const [formData, setFormData] = useState(initialFormData);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
  e.preventDefault();
  if(bedPartModal !== '') {
    setBedPartModal('');
    setBedModal('Bed');
    setSelectedBeds('');
    setSelectedBedParts('');
  }
  else {
    setShow(true);
  }
};
  function handleBedPartsClick(e, item) {
    e.preventDefault();
    if (selectedBedParts.includes(item)) {
      setSelectedBedParts(selectedBedParts.filter((selected) => selected !== item));
      setBedPartModal('');
    } else {
      setSelectedBedParts([item]);
      setBedPartModal(item);
    }
  }

  function handleBedClick(e, item) {
  e.preventDefault();
  if (selectedBeds.includes(item)) {
    setSelectedBeds(selectedBeds.filter((selected) => selected !== item));
    setBedModal(item);
  } else {
    setSelectedBeds([...selectedBedroomItems, item]);
    setBedModal(item);
  }

  if (selectedBedParts.length === 0) {
    setBedPartModal('Full Bed'); // Set a default value when selectedBeds is empty
    if (selectedBedParts.includes('Full Bed')) {
      setSelectedBedParts(selectedBedParts.filter((selected) => selected !== 'Full Bed'));
      setBedPartModal('');
    } else {
      setSelectedBedParts(['Full Bed']);
      setBedPartModal('Full Bed');
    }
  }
}
  function handleItemClick(e, item) {
    e.preventDefault();
    if (selectedBedroomItems.includes(item)) {
      setSelectedBedroomItems(selectedBedroomItems.filter((selected) => selected !== item));
    } else {
      setSelectedBedroomItems([...selectedBedroomItems, item]);
    }
  }
  function handleRoomClick(e,room) {
     e.preventDefault();
    if (selectedRooms.includes(room)) {
      setSelectedRooms(selectedRooms.filter((selected) => selected !== room));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit() {
    // Perform actions with formData, e.g., send it to the server

    // Clear the form or perform any additional tasks
    setFormData(initialFormData);
  }
  function modalTester() {


    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className ="bed-picker">
              <button
                className={`form-control room-button ${selectedBeds.includes('Single') ? 'selected' : ''}`}
                onClick={(e) => handleBedClick(e, 'Single')}>Single
              </button>
              <button
                className={`form-control room-button ${selectedBeds.includes('Double') ? 'selected' : ''}`}
                onClick={(e) => handleBedClick(e, 'Double')}>Double
              </button>
              <button
                className = {`form-control room-button ${selectedBeds.includes('Queen') ? 'selected' : ''}`}
                onClick={(e) => handleBedClick(e, 'Queen')}>Queen
              </button>
              <button
                className={`form-control room-button ${selectedBeds.includes('King') ? 'selected' : ''}`}
                onClick={(e) => handleBedClick(e, 'King')}>King
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className = "form-control bed-picker">
              <button
                className = {`form-control room-button ${selectedBedParts.includes('Full Bed') ? 'selected' : ''}`}
                onClick={(e) => handleBedPartsClick(e, 'Full Bed')}>Full Bed
              </button>
              <button
                className={`form-control room-button ${selectedBedParts.includes('Mattress') ? 'selected' : ''}`}
                onClick={(e) => handleBedPartsClick(e, 'Mattress')}>Mattress Only
              </button>
              <button
                className={`form-control room-button ${selectedBedParts.includes('Bed Base') ? 'selected' : ''}`}
                onClick={(e) => handleBedPartsClick(e, 'Bed Base')}>Base Only
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function renderPersonalInformation() {
    return (
      <div>
        <h5 className = "form-subheading">Your personal details: </h5>
        <div className = "customer-name">
          <div className="mb-3">
              <label className="form-label">Title </label>
              <input type="text" className="form-control" name = "title" value={formData.title} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">First Name</label>
            <input type="text" className="form-control" name = "firstName" value={formData.firstName} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">Surname</label>
            <input type="text" className="form-control" name = "surname" value={formData.surname} onChange={handleInputChange}/>
          </div>
        </div>
        <div className = "customer-email">
          <div className="mb-3" >
            <label className="form-label ">E-mail</label>
            <input type="email" className="form-control" name = "email" value={formData.email} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">Phone Number</label>
            <input type="tel" className="form-control" name = "phone" value={formData.phone} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
    )
  }
  function renderPickupInformation() {
    return (
      <div>
        <h5 className = "form-subheading">Pickup Information </h5>
        <div className = "address">
          <div className="mb-3" >
            <label className="form-label ">Pickup Address</label>
            <textarea id="comments" name="comments" rows="5" cols="50" name = "pickupAdd" value={formData.pickupAdd} onChange={handleInputChange}></textarea>
          </div>
        <div className = "address-subinfo">
          <div className="mb-3" >
            <label className="form-label ">Eircode</label>
            <input type="text" className="form-control" name = "pickupEir" value={formData.pickupEir} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
              <label className="form-label ">Property Type</label>
              <input type="text" className="form-control" name = "pickupProp" value={formData.pickupProp} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">Lift Available?</label>
            <input type="text" className="form-control" name = "pickupLift" value={formData.pickupLift} onChange={handleInputChange}/>
          </div>
          <div className="mb-3" >
            <label className="form-label ">Date moving</label>
            <input type="date" className="form-control" name = "pickupDate" value={formData.pickupDate} onChange={handleInputChange}/>
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
        {pickupRenderAdditionalInfo()}
      </div>
    )
  }
  function renderDeliveryInformation() {
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
    {deliveryRenderAdditionalInfo()}
  </div>
  )}
  function renderPackingInformation() {
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
      {boxSupplyRender()}
    </div>
    )
  }
  function boxSupplyRender() {
      if (formData.boxSupply === 'Yes') {
        return (
          <div className = "boxSupplyAmount">
            <div className="mb-3">
            <label className="form-label"> Small Boxes <span className="small-text"> (16"x12"x12")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplySmall"
              value={formData.boxSupplyPack1}
              onChange={handleInputChange}
              />
            </div>
          <div className="mb-3">
            <label className="form-label">Medium Boxes <span className="small-text"> (18"x18"x16")</span> </label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyMedium"
              value={formData.boxSupplyPack2}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Large Boxes <span className="small-text"> (18"x18"x24")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyLarge"
              value={formData.boxSupplyPack3}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Wardrobe Boxes <span className="small-text"> (24"x21"x48")</span></label>
            <input
              type="number"
              className="form-control"
              name="boxSupplyWardrobe"
              value={formData.boxSupplyPack3}
              onChange={handleInputChange}
            />
          </div>
        </div>
      );
    }
    return null; // Return null when "No" is selected
  }

  function renderLivingRoomList() {
    const livingRoomItems = [
    { name: "Grand Piano", volume: 10 },
    { name: "Baby Grand Piano", volume: 8 },
    { name: "Upright Piano", volume: 6 },
    { name: "Digital Piano", volume: 4 },
    { name: "4 Seater Sofa", volume: 15 },
    { name: "3 Seater Sofa", volume: 10 },
    { name: "2 Seater Sofa", volume: 8 },
    { name: "L-Sofa", volume: 6 },
    { name: "Armchair", volume: 4 },
    { name: "Sofa Bed", volume: 15 },
    { name: "Snooker Table", volume: 10 },
    { name: "Wall Unit", volume: 8 },
    { name: "Bookcase", volume: 6 },
    { name: "Baby High Chair", volume: 4 },
    { name: "Stools", volume: 15 },
    { name: "Ironing Board", volume: 15 },
    ];

    return (
      <div>
        <h6 className = "inventory-heading">Living Room </h6>
        <div className="inventory-list">
          {livingRoomItems.map((item, index) => (
            <div className="mb-3" key={index}>
            <label className="form-label">{item.name}</label>
            <input type="number" className="form-control" />
            </div>
          ))}
        </div>
      </div>
    )
  }
  function renderKitchenList() {
  const kitchenItems = [
    { name: "American Fridge", volume: 20 },
    { name: "Tall Fridge Freezer", volume: 18 },
    { name: "Washing Machine", volume: 6 },
    { name: "Tumble Dryer", volume: 8 },
    { name: "Range Oven", volume: 10 },
    { name: "Microwave", volume: 2 },
    { name: "Under Counter Fridge/Freezer", volume: 12 },
    { name: "Double Chest Freezer", volume: 16 },
    { name: "Double Oven", volume: 10 },
    { name: "Single Oven", volume: 8 },
    { name: "Dishwasher", volume: 6 },
    { name: "Kitchen Table", volume: 8 },
    { name: "Kitchen Chairs", volume: 4 },
    { name: "Baby High Chair", volume: 2 },
    { name: "Stools", volume: 4 },
    { name: "Ironing Board", volume: 2 },
  ];

  return (
    <div>
      <h6 className="inventory-heading">Kitchen</h6>
      <div className="inventory-list">
        {kitchenItems.map((item, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{item.name}</label>
            <input type="number" className="form-control" />
          </div>
        ))}
      </div>
    </div>
  );
}
  function renderBedroomList() {
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

    if (selectedRooms.includes("Bedroom")) {
      return (
        <>
        <h4 className="d-flex justify-content-center">Bedroom</h4>
         <div className="inventory-list">
           <div className = "mb-3">
             <button
               className={`form-control item-button ${ bedPartModal ? 'selected' : ''}`}
               onClick={handleShow} >
               {bedModal + ' ' + bedPartModal}
             </button>
             {modalTester()}
           </div>
           {bedroomItems.map((item, index) => (
             <div className="mb-3" key={index}>
               <button
                 className={`form-control item-button ${selectedBedroomItems.includes(item.name) ? 'selected' : ''}`}
                 onClick={(e) => handleItemClick(e, item.name)}>{item.name}
               </button>
             </div>
           ))}
         </div>
        </>
      );
    }
  }
  function pickupRenderAdditionalInfo() {
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
  function deliveryRenderAdditionalInfo() {
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
  function renderSurveyQ() {
    return (
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

    )
  }
  function renderSelfSurvey() {
    if(formData.surveyType === "bookSurvey") {
      return(
        <div className = "surveyBooking">
          <label>When do you want us to come and survey your property?</label>
          <input className = "form-control" type="date" ></input>
        </div>
      )
    }
    else if(formData.surveyType === "selfSurvey") {
      return(

            <div className="room-picker">
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Bedroom') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Bedroom')}>Bedroom
                </button>
              </div>
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Kitchen') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Kitchen')}>Kitchen
                </button>
              </div>
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Living Room') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Living Room')}>Living Room
                </button>
              </div>
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Garden/Balcony') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Garden/Balcony')}>Garden/Balcony
                </button>
              </div>
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Garage') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Garage')}>Garage
                </button>
              </div>
              <div className="mb-3">
                <button
                  className={`form-control room-button ${selectedRooms.includes('Attic') ? 'selected' : ''}`}
                  onClick={(e) => handleRoomClick(e, 'Attic')}>Attic
                </button>
              </div>
            </div>
      )
    }
  }
  function renderSurvey() {
    return(
      <div className = "survey-render">
        {renderSurveyQ()}
        {renderSelfSurvey()}
      </div>
    )
  }




  return (
    <div className = "Estimate">
    <Navbar/>
    <h1 className = "heading"> Estimate Form </h1>
      <div className= "estimate-form">
        <form className = "form">
          {renderPersonalInformation()}
          {renderPickupInformation()}
          {renderDeliveryInformation()}
          {renderPackingInformation()}
          <h5 className = "form-subheading">Survey </h5>
          {renderSurvey()}
          {renderBedroomList()}
        </form>
      </div>
      <button className= "submit-button" onClick={handleSubmit}>Submit</button>
      <div>
      <div>
        <p>Title: {formData.title}</p>
        <p>First Name: {formData.firstName}</p>
        <p>Surname: {formData.surname}</p>
        <p>E-mail: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>addy: {selectedBeds[0]}</p>

        </div>
      </div>
    </div>
  );
}

export default Estimate;
