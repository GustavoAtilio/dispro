import {RiAlertFill} from 'react-icons/ri'


interface Props{
  msg: string;
  subMsg?: string
}

const AppError = (props:Props) =>{
    return (
        <div className={'flex flex-row bg-red-300 py-2 rounded-[10px] items-center'}>
        <div className={'border-l-2 flex border-l-red-700 py-2 w-[40px]'} >
          <RiAlertFill className={'text-red-500 '} />
        </div>
        <p className={'text-xs'}>{props.msg}<br/>{props.subMsg}</p>
      </div> 
    );
}


export default AppError;