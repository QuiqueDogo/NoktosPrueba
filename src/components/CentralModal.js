import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import noimage from '../img/noimage.png';


function CentralModal(props) {
    const changeimage = (e) => {
      e.target.src = noimage
  }
    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.data.info?.nombre ?? ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel >
          {
            props.data.info?.imagenes.map((element, index) => {
              return (
                  <Carousel.Item className="Hotel"  key={index+element.id} interval={2000}>
                  <img
                    onError={changeimage}
                    className="imageHotel"
                    src={element.path}
                    alt="First slide"
                    />
                  <Carousel.Caption>
                    <p>Foto Actualizada: {
                    }</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            }) ?? ''
          }

      </Carousel>
      <div className="rooms">
      {
            props.data.info?.habitaciones.map((element, index) => {
              return (
              <>
                <i className="fa-solid fa-bed"> Habitacion {element.nombre} <br/> Precio: $ {element.precio}</i>
                <h6>{element.descripcion}</h6>
              </>
              )
            }) ?? ''
      }


      </div>
          <p>Telefono +51 {props.data.info?. telefono ?? ''}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CentralModal