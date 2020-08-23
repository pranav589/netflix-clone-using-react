import React,{useEffect,useState} from 'react'
import './Nav.css'

function Nav(){
  const [show,handleShow]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
      }else{
        handleShow(false)
      }
    })
    return ()=>{
      window.removeEventListener("scroll")
    }
  },[])

  return(
    <div className= {`nav ${show && "nav_black"}`}>
       <img src="https://stackblitz.com/files/netflix-clone-using-react/github/pranav589/netflix-clone-using-react/master/src/580b57fcd9996e24bc43c529.png" className="nav_logo" alt="Netflix Logo"/>

       <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" className="nav_avatar" alt="Netflix Avatar"/>
    </div>
  )
}

export default Nav