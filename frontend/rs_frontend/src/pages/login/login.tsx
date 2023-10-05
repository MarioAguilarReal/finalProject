import './login.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersService from '../../services/users.service';

interface User {
  email: string,
  password: string
}

const user : User= {
  email: '',
  password: ''
}

const Login = () => {
  let navigateTo = useNavigate();
  const [logUser, setLogUser] = useState(user as User);


  const handleSubmit = async () => {
    let resp = await usersService.login(logUser);
    console.log(resp);
    navigateTo('/admin/dashboard');
  }

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogUser({
        ...logUser,
        [name]: value
    });
  };

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
              <input
                type="email"
                className="form-control"
                id="email" 
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={logUser.email}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={logUser.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;