import logo from '../img/noktos_logo.svg'
import React, {useState,useContext, useEffect, useRef} from 'react';
import {LoginContext} from '../App';
import CustomAlert from '../components/CustomAlert'
import 'bootstrap/dist/css/bootstrap.min.css';


async function loginUser(credentials) {
    return  fetch('https://desarrollo.api.noktos.com/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(error => console.log('no jala',error));
   }

  


function Login(){
    const  {info,setinfo}  = useContext(LoginContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState(false);
    const [textRender, settextRender] = useState('');
    const [variant, setvariant] = useState('');

    let trigger = useRef(null);


    const setAlert = (showTo, text, type) =>  {
        setShow(showTo);
        settextRender(text);
        setvariant(type);
    }

    // demosistemas@yopmail.com
        // Prueba@1
    const setToken = async (e) => {
        e.preventDefault();
        const token = await  loginUser({
          'email':email,
          'password':password,
          'sistema': 2
        });
        if(token.email || token.password){
            setAlert(true,'Credenciales erroneas. Revisa tu usuario o contraseña','danger');
        }else if(token.res === false ){
            setAlert(true,'Credenciales erroneas. Revisa tu usuario o contraseña','danger');
        }else if(token.res === true){ 
            setAlert(true,token.message,'success');
            localStorage.setItem('token', token.token);
            console.log(token.token);
            
            trigger.current.style.animation = 'fade';
            trigger.current.style.animationDuration = "0.9s";
            trigger.current.style.animationFillMode = "forwards";
        setTimeout(() => {
            setinfo(true)
        }, 1000);
        //   await AsyncStorage.setItem('token', token.data.token);
        //   await AsyncStorage.setItem('id', token.data.id);
        //   await AsyncStorage.setItem('type', token.data.type);
          // await AsyncStorage.setItem('email', token.data.email);??
        //   setUser(true);
        }
       }

       const  displayData = async ()=>{  
        try{  
          const data = await localStorage.getItem('token');  
          if (data !== null) {
            return data;
          }
        }  
        catch(error){  
          return false  
        }  
      }
       useEffect(() => {
        displayData().then(data=>data).then(val => val ? setinfo(true):setinfo(false))
       },[])
    return(
        <section ref={trigger} className="container-logo">
            <div className="division black">
                <img src={logo}  alt="logo" />
            </div>
            <div className="division">
                <section className="login">
                <div className="container_welcome">
                    <h1 className="text-center">Bienvenido</h1>
                </div>
                <form  className="login_inputs" onSubmit={setToken}>
                    <div>
                        <label>Email</label>
                        <input type="email" className="form-control" id="name" onChange={value => setEmail(value.target.value)}/>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" className="form-control" onChange={value => setPassword(value.target.value)} />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-outline-primary">Entrar</button>
                    </div>
                </form>
                </section>
            </div>
            <CustomAlert 
            textToRender={textRender}
            variant={variant}
            showProp={show}
            setShow={setShow} 
            time='1500'/>
            
        </section>
    )
}

export default Login