import type { NextPage } from 'next'
import Link from 'next/link';



const Home: NextPage = () => {
  
  return (
    <div>
      <h1>Pagina em Desenvolvimento 
        <Link href={"/login"} ><h1 className={'text-red-700'}> Faça Login </h1></Link> </h1> 
    </div>
  );
}

export default Home
