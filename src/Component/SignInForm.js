import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../App';
import './SignInForm.css'

const SignInForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
      console.log( 'form submitted', data)
    };

  console.log(watch("example")); 

  return (
   <div className='signIn'>
       <p>Please register for logging</p>
    <form className='signIn-form' onSubmit={handleSubmit(onSubmit)}>  
        <input name="name" defaultValue={loggedInUser.name} placeholder="Write Your Name" ref={register({ required: true })} />     
      {errors.name && <span className="error">Name is required</span>} 

      <input name="email" defaultValue={loggedInUser.email} placeholder="Write Your Email" ref={register({ required: true })} />     
      {errors.email && <span className="error">email is required</span>} 

      <input name="address" placeholder="Write Your Address" ref={register({ required: true })} />     
      {errors.address && <span className="error">address is required</span>} 

      <input name="phone" placeholder="Write Your Phone Number" ref={register({ required: true })} />     
      {errors.phone && <span className="error">phone is required</span>} 

      <input className="btn btn-info" type="submit" />
    </form>
    </div>
  );
};

export default SignInForm;