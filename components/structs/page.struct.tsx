import React from "react";
import LogoImg from "../images/logo.component";


interface Props{
    children: JSX.Element
}

const BodyStruct = (props:Props)=>{
    return (
        <div className={'w-full min-h-screen flex'}>

        <div className={' containerLogo '}>
            <div className={'mt-[10px] ml-[30px]'}>
            <LogoImg />
            </div>
        </div>
  
  
        <div className={'containerCard'}>
        <div className={'logo-mobile'}>
              <LogoImg />
            </div>
          <div className="md:w-[45%] p-4 shadow-md rounded-lg border bg-white"> 
            
            
            {props.children}  
  
          </div>
  
        </div>
  
      </div>
    );
}


export default BodyStruct;