import { Facebook } from './Facebook';
import { Logo } from './Logo';
import {Google} from './Google'
import { useState } from 'react'
import { Error } from './Error'
import { SuccessAlert } from './SuccessAlert'
export function Form() {

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let [nameErr,setnameErr] = useState({status:false, msg:""})
    let [emailErr,setemailErr] = useState({status:false, msg:""})
    let [passwordErr,setpasswordErr] = useState({status:false, msg:""})
    let [successMsg,setSuccessMsg] = useState(false)

    const showSubmitMsg = ()=>{

        setSuccessMsg(true)

        setTimeout(()=> {
            setSuccessMsg(false)
          }, 2000);

    }



    const nameValidate = ()=>{
        if(name==="")
      {  
        setnameErr({status:true,
            msg:"Name can't be empty"})
        
            return false
        }

        if(/\d/.test(name))
        {

        setnameErr({status:true,
            msg:"Enter valid name"})

            return false
        }

        return true
    }


    const emailValidate = ()=>{

        if(email==="")
        {

        setemailErr({status:true,msg:"Email can't be empty"})
            return false
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
     {
        setemailErr({status:true, msg:"Email not valid"})

        return false
     }
   
     return true
        
    }

    const passwordValidate = ()=>{

        if(password==="")
        {
            setpasswordErr({status:true, msg:"Password cannot be empty"})
            return false
        }

        if(password.length<7)
        {
            setpasswordErr({status:true, msg:"Password needs to be minimum of 7 characters"})
             return false
        }

        if(!/[A-Z]/.test(password))
        {
            setpasswordErr({status:true, msg:"Password needs to have alteast one uppercase letter"})
             return false
        }

        if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password))
        {
            setpasswordErr({status:true, msg:"Password needs to have alteast one special letter"})
             return false
        }



        return true
    }

const handleSubmit = ()=>{
    setnameErr({status:false, msg:""})
    setemailErr({status:false, msg:""})
    setpasswordErr({status:false, msg:""})
    

let v1 = nameValidate()
let v2 = emailValidate()
let v3 = passwordValidate()

if(v1 && v2 && v3)
{
    
    setName("")
    setEmail("")
    setPassword("")
showSubmitMsg()
}
}


  return (
    <section>
      <div className="flex items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        {successMsg && <SuccessAlert />}
        <Logo />
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{' '}
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value = {name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
            
                  ></input>
                     {nameErr.status && <Error msg={nameErr.msg}/>}

                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value = {email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                  ></input>
                  {emailErr.status && <Error msg={emailErr.msg}/>}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value = {password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                  ></input>
                 {passwordErr.status && <Error msg={passwordErr.msg}/>}

                </div>
              </div>
              <div>
                <button type="button" onClick={handleSubmit} className="inline-flex w-full items-center 
                justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7
                 text-white hover:bg-black/80">
                  Create Account  
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
           <Google     />
           <Facebook     />
          </div>
        </div>
      </div>
    </section>
  )
}
