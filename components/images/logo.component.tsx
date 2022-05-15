import Image from 'next/image';

const LogoImg = ()=>{
    return (
    <Image src={'/assets/disparopro.svg'} width='200' height="70" alt="logo" />
    );
}

export default LogoImg;