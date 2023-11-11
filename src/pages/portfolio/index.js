import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (data, event) => {
    event.preventDefault(); 
    setSelectedProject(data);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item" onClick={(event) => handleShow(data, event)}>
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link} className="view-project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>


<Modal
  show={showModal}
  onHide={handleClose}
  size="lg"
  dialogClassName="custom-modal"
>
  <Modal.Header closeButton>
    <Modal.Title>{selectedProject && selectedProject.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedProject && (
      <>
      <p>{selectedProject.additionalInfo}</p>
        <p>
          <strong>Link:</strong>{" "}
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            {selectedProject.link}
          </a>
        <br/><br/>
          <p>{selectedProject.details}</p>
        </p>
        <img
          src={selectedProject.img}
          alt=""
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        
      </>
    )}
  </Modal.Body>
</Modal>
      </Container>
    </HelmetProvider>
  );
};
