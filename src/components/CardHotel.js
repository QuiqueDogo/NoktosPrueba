import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import noimage from '../img/noimage.png';
import ReactStars from 'react-stars';

function CardHotel(props) {
    // console.log(props)
    const changeimage = (e) => {
        e.target.src = noimage
    }
    return(
        <Card className='card-size'>
            <Card.Img  className='imgHotel' variant="top" alt='Variant' src={props.info?.imagen ?? noimage} onError={changeimage} />
            <Card.Body>
            <Card.Title>{props.info.nombre}</Card.Title>
            <div className='content-star'>
                    <ReactStars
                        value={props.info.calificacion} 
                        edit={false}
                        color2={'#ffd700'} />
                </div>
            <Card.Text as='div'>
                <p className='small'>
                    {svg }
                    { `${props.info.direccion}, ${props.info?.codigo_front2go?? ''}`}
                </p>
                <h5>Amenidades</h5>
                <div className='content-activites'>
                {props.info.amenidades.length >= 0 &&
                    props.info.amenidades.map((elem,index)=> {
                        return(
                            <i key={index+elem} className={elem.icon}></i>
                            )
                        })
                    }
                 {props.info.amenidades.length <= 0 && 
                    <p>N/A</p>
                 }
                </div>
            </Card.Text>
            </Card.Body>
            <Button onClick={() => props.triggerModal(props)} variant="primary">Mas detalles</Button>
        </Card>
    )
}

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>

export default CardHotel
