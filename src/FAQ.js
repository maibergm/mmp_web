import React, { useState } from 'react';
import { Collapse, Button, Card, CardBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FAQ.css";

function FAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleCollapse1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleCollapse3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleCollapse4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div>
      <h2 className = "faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        <Card>
          <Card.Header>
            <Button variant="link" className="btn-block text-left" onClick={toggleCollapse1}>
              Do you offer packing services??
            </Button>
          </Card.Header>
          <Collapse in={isOpen1}>
            <Card.Body>
              Yes we offer packing and un-packing services at an extra charge.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Button variant="link1" className="btn-block text-left1" onClick={toggleCollapse2}>
              Do you offer insurance for my belongings?
            </Button>
          </Card.Header>
          <Collapse in={isOpen2}>
            <Card.Body>
              Yes we are a fully insured company so if anything is damaged during the move you are fully covered!.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Button variant="link" className="btn-block text-left" onClick={toggleCollapse3}>
              Can you help with disassembly and reassembly of furniture?
            </Button>
          </Card.Header>
          <Collapse in={isOpen3}>
            <Card.Body>
              Yes we would assemble and disassemble most furniture.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Button variant="link" className="btn-block text-left" onClick={toggleCollapse4}>
              Do you provide moving supplies and boxes?
            </Button>
          </Card.Header>
          <Collapse in={isOpen4}>
            <Card.Body>
              Yes on request we can provide the neccessary supplies for moving such as tape and boxes at an additional charge.
            </Card.Body>
          </Collapse>
        </Card>



        {/* Add more FAQ items here */}
      </div>
    </div>
  );
}

export default FAQ;
