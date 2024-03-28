import './Callbanner.css';
function Callbanner() {
  return (
    <div className="callbanner">
      <div className ="callbanner-content">
        <p className ="callbanner-text">Want us to call you?</p>
        <input className ="callbanner-input-name" type="text" placeholder="Name" />
        <input className = "callbanner-input-phone"type="text" placeholder="Phone Number" />
        <button className = "callbanner-button">Request Callback</button>
      </div>
    </div>
  );
}

export default Callbanner;
