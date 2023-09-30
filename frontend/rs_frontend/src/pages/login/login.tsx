import './login.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigateTo = useNavigate();
  const handleSubmit = () => {
    console.log('submit');
    navigateTo('/admin/dashboard');
  }

  return (
    <div className='login-container'>
      <section>
        <a href="/">Back</a>
      </section>
      <section>
        <h1 className='title-form'>Login</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="email" className="form-control" id="email" placeholder='Email' />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control" id="password" placeholder='Password' />
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;