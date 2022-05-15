import type { NextPage } from 'next'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import UserModel from '../models/user.model';
import CreateUserSchema from '../schemas/create-user.schema';
import BodyStruct from '../components/structs/page.struct';
import FieldPasswordInput from '../components/inputsFields/field-password.input';
import FieldInput from '../components/inputsFields/field.imput';
import NumberFieldInput from '../components/inputsFields/field-number.input';
import AppError from '../components/errors/app.error';



const Register: NextPage = () => {

    const { register, handleSubmit, formState } = useForm<UserModel>(
        {
          defaultValues: {
            name:"",
            password: "",
            email:"",
            number:"",
            repeatPassword:"",
            notify:'yes',
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

              <FieldInput model={'name'} label={'Nome'} errors={formState.errors.name} register={register}/>
              <FieldInput model={'email'} label={'E-mail'} errors={formState.errors.email} register={register}/>
              <NumberFieldInput model={'number'} errors={formState.errors.number} register={register} /> 
    
              <FieldPasswordInput model={"password"} errors={formState.errors.password} label={'Senha'} register={register}/>
              <FieldPasswordInput model={'repeatPassword'} errors={formState.errors.repeatPassword} label={'Repitir Senha'} register={register}/>

              <div className={'flex flex-row mx-2 my-3 justify-center '} >
              <input  type={'checkbox'} {... register('acceptTerms')}/>
                <p className={formState.errors.acceptTerms? 'text-[10px] mx-2 text-red-500' : 'text-[10px] mx-2'} > Eu li e aceito a politica de privacidade da Disparo Pro Termos de privacidade</p>
                </div>
                
                <div className={'flex flex-col mx-2 my-3 justify-center'} >
                <p className={'text-[10px] mx-2'} > Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</p>
                
                <div className={'flex flex-row justify-center'}>
                  <div className={'mx-4'}>
                <label className={'text-[10px]'}>

                <input className={'mx-1'} type="radio" {... register('notify')} name="notify" value="yes"  />
                Sim
                </label>
                  </div>
                  <div className={'mx-4'}>
                   
                <label className={'text-[10px]'} >
                <input className={'mx-1'}  type="radio"   {... register('notify')} name="notify" value="no"  />
                Não
                </label>
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

                
              
              </form>
              </>
        </BodyStruct>
      )
}


export default Register;