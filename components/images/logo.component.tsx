import Image from 'next/image';

interface Props{
    width: number;
    height: number;
}

const LogoImg = (props:Props)=>{
    return (
    <Image src={'/assets/disparopro.svg'} width={props.width} height={props.height} alt="logo" />
    );
}

export default LogoImg;