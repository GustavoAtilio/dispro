import type { NextPage } from 'next'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import LoginModel from '../models/login.model';
import LoginSchema from '../schemas/login.schema';
import BodyStruct from '../components/structs/page.struct';
import FieldPasswordInput from '../components/inputsFields/field-password.input';
import FieldInput from '../components/inputsFields/field.imput';
import ButtonCard from '../components/button/button';
import AppError from '../components/errors/app.error';



const Login: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<LoginModel>(
  {
    defaultValues: {
      userName:"",
      password: ""
    },
    resolver: yupResolver(LoginSchema)
  }
  );

  const onSubmit: SubmitHandler<LoginModel> = data => {
    console.log(data)
  };

  return (
    <BodyStruct>
        <>
        <h2 className='titleCard'>Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
          
          <FieldInput model={'userName'} label={'E-mail'} errors={formState.errors.userName} register={register}/>
          <FieldPasswordInput model={'password'} errors={formState.errors.password} label={'Senha'} register={register}/>
          <ButtonCard title={'Conectar'}/>

            <div className={'flex flex-col items-center my-2'} > 
              <p className={'text-xs'}>Ainda não é clinte Disparo Pro ?</p>
              <Link href="/register">
                <a className={'text-cyan-600 text-xs'}>Criar Conta</a>
             </Link>
            </div>
          { (formState.errors.userName && formState.errors.password) && 
           <AppError msg='Usuário ou senha incorreta' subMsg='tente novamente.'/>}
          </form>
          </>

    </BodyStruct>
  )
}

export default Login;
