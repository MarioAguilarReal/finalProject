import './login.scss'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usersService from '../../services/users.service';
import { DataContext } from '../../store/dataContext';
import { useContext } from 'react';

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

  const { setIsLoggedIn, isLoggedIn, setUser} = useContext(DataContext);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp:any = await usersService.login(logUser);

    if(resp?.status === 200){
      setIsLoggedIn(true);
      setUser(resp.data);
      navigateTo('/admin/dashboard');
    }else{
      alert('Invalid credentials');
      setIsLoggedIn(false);
    }

  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogUser({
        ...logUser,
        [name]: value
    });
  };

  useEffect(() => {
    console.log('is logged in', isLoggedIn);
    if(isLoggedIn){
      console.log('is logged in');
      navigateTo('/admin/dashboard');
    }
  }, []);

  return (
    <div className='login-container'>
      <section>
        <Link to="/" className='btn'>Back</Link>
      </section>
      <section>
        <h1 className='title-form'>Login</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit} method='POST'>
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
