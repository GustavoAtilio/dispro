import type { NextPage } from 'next'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import {AiFillEye} from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup';
import LoginError from '../components/errors/login.error';
import UserModel from '../models/user.model';
import CreateUserSchema from '../schemas/create-user.schema';
import BodyStruct from '../components/structs/page.struct';



const Register: NextPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<UserModel>(
        {
          defaultValues: {
            name:"",
            password: "",
            email:"",
            number:"",
            repeatPassword:"",
            notify:false,
          },
          resolver: yupResolver(CreateUserSchema)
        }
        );
      
        const onSubmit: SubmitHandler<UserModel> = data => {
          console.log(data)
        };
    return (
        <BodyStruct>
            <>
            <h2 className='titleCard color-text-title'>Cadastre-se</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.name? 'text-red-500': 'color-text-title'}>Nome</label>
                  <input className={'border-2 w-full'} {... register("name") } />
              </div> 

              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.email? 'text-red-500': 'color-text-title'}>E-mail</label>
                  <input className={'border-2 w-full'} {... register("email") } />
              </div>

               <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.number? 'text-red-500': 'color-text-title'}>Número</label>
                  <input className={'border-2 w-full'} {... register("number") } />
              </div>  
    
              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.password? 'text-red-500': 'color-text-title'}>Senha</label>
                  <div className={'relative'}>
                  <AiFillEye className={'absolute right-2 top-[20%] color-text-title'} />
                  <input className={'border-2 w-full'} type={'password'} {... register('password')} />
                  </div>
              </div> 
              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.repeatPassword? 'text-red-500': 'color-text-title'}>Repitir Senha</label>
                  <div className={'relative'}>
                  <AiFillEye className={'absolute right-2 top-[20%] color-text-title'} />
                  <input className={'border-2 w-full'} type={'password'} {... register('repeatPassword')} />
                  </div>
              </div> 

              <div className={'flex flex-row mx-2 my-3 justify-center '} >
              <input  type={'checkbox'} {... register('acceptTerms')}/>
                <p className={errors.acceptTerms? 'text-[10px] mx-2 text-red-500' : 'text-[10px] mx-2'} > Eu li e aceito a politica de privacidade da Disparo Pro Termos de privacidade</p>
                </div>
                
                <div className={'flex flex-col mx-2 my-3 justify-center'} >
                <p className={'text-[10px] mx-2'} > Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</p>
                <div className={'flex flex-row justify-center'}>
                  <div className={'mx-4'}>
                <input className={'mx-1'} type="radio"  {... register('notify' ,{required:true})}/>
                <label className={'text-[10px]'}>Sim</label>
                  </div>
                  <div className={'mx-4'}>
                <input className={'mx-1'}  type="radio"   {... register('notify' ,{required:false})}/>
                <label className={'text-[10px]'} >Não</label>
                  </div>
                </div>
                </div>
    
              <div className={'flex justify-center'}>
                  <button className={'buttonCard'} type={'submit'} >Cadastrar</button>
                </div>
          
                <div className={'flex flex-col items-center my-2'} > 
                  <p className={'text-[10px]'}>Você já é cliente Disparo Pro ?</p>
                  <Link href="/login">
                    <a className={'color-text-title text-xs'}>Fazer Login</a>
                  </Link>
    
                </div>
              { (errors.name && errors.password) &&  <LoginError/>}
              </form>
              </>
        </BodyStruct>
      )
}


export default Register;