import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from '@reach/router';
import { useState } from 'react';
import useAuth from './../../context/useAuth';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }

  }
`;



const Register= () => {
  const navigator = useNavigate()
  const { registerViaEmailandPassword,user } = useAuth()
  const [ email, setEmail ] = useState("");
  const [ userName, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleFormSubmit = e =>{
      e.preventDefault();
      registerViaEmailandPassword(email,password,userName)
  }

  const handleField = e =>{
      if( e.target.name === 'email'){
        setEmail(e.target.value);
      }
      if( e.target.name === 'username'){
        setUserName(e.target.value);
      }
  }
  const handlePassField = e =>{
      if( e.target.name === 'password'   ){
        setPassword(e.target.value)
      }
  }
  if( user.uid ){
    navigator('/create')
  }
  
return (
<div>
<GlobalStyles />

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1>Register</h1>
              <p>Anim pariatur cliche reprehenderit</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className="row">

    <div className="col-md-8 offset-md-2">
      <h3>Don't have an account? Register now.</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <div className="spacer-10"></div>

      <form name="contactForm" id='contact_form' className="form-border" action='#' onSubmit={handleFormSubmit}>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' id='name' className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Email Address:</label>
                                    <input type='text' name='email' id='email' className="form-control"  onBlur={handleField}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Choose a Username:</label>
                                    <input type='text' name='username' id='username' className="form-control" onBlur={handleField} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Phone:</label>
                                    <input type='text' name='phone' id='phone' className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Password: ( min - 6 password required )</label>
                                    <input type='password' name='password' id='password' className="form-control" autoComplete="off" onBlur={handlePassField} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Re-enter Password:</label>
                                    <input type='password' name='rePassword' id='re-password' className="form-control" autoComplete="off"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id='submit' className="pull-left me-3">
                                    <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2" />
                                </div>
                                <div className="cutom-p">
                                   Are You Already Member? Click <span className='custom-link-btn'> <Link to="/login">Here</Link></span>
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </form>
      </div>

    </div>
  </section>

  <Footer />
</div>

)};
export default Register;