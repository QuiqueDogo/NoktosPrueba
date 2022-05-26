import { useEffect, useState,useContext, useRef } from "react"
import {LoginContext} from '../App';
import Pagination from 'react-bootstrap/Pagination';
import CardHotel from '../components/CardHotel';
import CentralModal from "../components/CentralModal";

function TodoApp(){
    const  {info,setinfo}  = useContext(LoginContext);
    const [active, setactive] = useState(1);
    const [pagi, setpag] = useState(10);
    const [data, setData] = useState([]);
    const [dataOne, setDataOne] = useState([]);
    const [datafilter, setDatafilter] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-20);
    const myRef = useRef(null)

    const fetchData = () => {
        const token = localStorage.getItem('token');
        fetch('https://desarrollo.api.noktos.com/api/admin/hosts/50', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` ,
        }
    })
      .then(data => data.json().then(json => {
          console.log(json) 
          setData(json.host)
          setDatafilter(paginate(json.host, 10 ,1))
    }))
      .catch(error => {
          setinfo(false)
          localStorage.removeItem('token')
        });
    }
    
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active} 
            onClick={() => {
            setactive(number) 
            setpag(number)
            setDatafilter(paginate(data, 10 ,number))
            scrollToRef(myRef)
            console.log(paginate(data, 10 ,number) ,
            (number===1 ? 1:(number*10)) , number*10)

            }}>
        {number}
        </Pagination.Item>
    );
    }
    
    const paginationBasic = (
        <div className="pagination">
          <Pagination>{items}</Pagination>
        </div>
      );
    const paginate = (array, page_size, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const triggerModal = (data) =>{
        setDataOne(data);
        setModalShow(true);
    }

    useEffect(() => {
        fetchData();
    },[])
    return(
        <>
        <section className="container content">      
        <p  ref={myRef}></p>
        {datafilter.length === 0 &&
            svg
        }
        {datafilter.map((element, index) => {
            return(
                <CardHotel key={index+'card'} info={element}  triggerModal={triggerModal} />
            )
            
        })
    }
        </section>
        <div className="container content-pag">
            {paginationBasic}
        </div>
        <CentralModal 
         data={dataOne}
         show={modalShow}
         onHide={() => setModalShow(false)}
        />

    </>
    )
}

const svg = <svg xmlns="http://www.w3.org/2000/svg" className="loader" width="200px" height="200px" viewBox="0 0 100 100">
<g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="3" ry="3.36" width="6" height="12" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>

export default TodoApp