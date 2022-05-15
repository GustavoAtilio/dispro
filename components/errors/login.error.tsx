import {RiAlertFill} from 'react-icons/ri'


const LoginError = () =>{
    return (
        <div className={'flex flex-row bg-red-300 py-2 rounded-[10px]'}>
        <div className={'border-l-2 flex border-l-red-700 py-2 w-[40px]'} >
          <RiAlertFill className={'text-red-500 '} />
        </div>
        <p className={'text-xs'}>Usuário ou senha incorreta<br/>tentar novamente</p>
      </div> 
    );
}


export default LoginError;