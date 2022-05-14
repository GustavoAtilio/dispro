import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import {AiFillEye} from 'react-icons/ai'
import {RiAlertFill} from 'react-icons/ri'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


type Inputs = {
  userName: string;
  password: string;
};

const schema = yup.object({
  userName: yup.string().required('Necessário Usuário'),
  password: yup.string().required('Necessário Senha'),
}).required();

const Home: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>(
  {
    defaultValues: {
      userName:"",
      password: ""
    },
    resolver: yupResolver(schema)
  }
  );

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  };

  return (
    <div className={'w-full min-h-screen flex'}>

      <div className={' containerLogo '}>
          <div className={'mt-[50px] ml-[20px]'}>
            <Image src={'/assets/disparopro.svg'} width='200' height="70" alt="logo" />
          </div>
      </div>


      <div className={'magicoLogo'}>
      <div className={'mt-[50px] ml-[20px] logo-mobile'}>
            <Image src={'/assets/disparopro.svg'} width='200' height="70" alt="logo" />
          </div>
        <div className="md:w-[45%] p-12 shadow-md rounded-lg border bg-white"> 
          <h2 className='my-5 bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-900 font-bold text-3xl text-center'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col justify-center input'} >
              <label className={ errors.userName? 'text-red-500': 'text-cyan-600'}>E-mail ou Celular</label>
              <input className={'border-2 w-full'} {... register("userName") } />
          </div> 

          <div className={'flex flex-col justify-center input'} >
              <label className={ errors.password? 'text-red-500': 'text-cyan-600'}>Senha</label>
              <div className={'relative'}>
              <AiFillEye className={'absolute right-2 top-[20%] text-cyan-600'} />
              <input className={'border-2 w-full'} type={'password'} {... register('password')} />
              </div>
          </div> 

          <div className={'flex justify-center'}>
              <button className={'border-2 bg-blue-500 text-white text-center py-3 px-10 rounded-[10px]'} type={'submit'} >Conectar</button>
            </div>

            <div className={'flex flex-col items-center my-2'} > 
              <p className={'text-xs'}>Ainda não é clinte Disparo Pro ?</p>
              <Link href={"/register"} className={'text-xs text-cyan-600'} >Crie Conta</Link>

            </div>
          { (errors.userName && errors.password) &&  <div className={'flex flex-row bg-red-300 py-2 rounded-[10px]'}>
              <div className={'border-l-2 flex border-l-red-700 py-2 w-[40px]'} >
                <RiAlertFill className={'text-red-500 '} />
              </div>
              <p className={'text-xs'}>Usuário ou senha incorreta<br/>tentar novamente</p>
            </div> }
          </form>

        </div>

      </div>

    </div>
  )
}

export default Home
