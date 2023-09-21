import './login.scss'

const Login = () => {
  return (
    <div className='login-container'>
      <h1 className='title-form'>Login</h1>
      <div className="login-form">
        <form>
          <div className="mb-4">
            <input type="email" className="form-control" id="email" placeholder='Email' />
          </div>
          <div className="mb-4">
            <input type="password" className="form-control" id="password" placeholder='Password'/>
          </div>
          <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;