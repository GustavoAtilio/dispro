
interface Pros{
    title:string;
}

const ButtonCard = (props:Pros)=>{
    return (
        <div className={'flex justify-center'}>
        <button className={'buttonCard'} type={'submit'} >{props.title}</button>
      </div>
    );
}

export default ButtonCard;