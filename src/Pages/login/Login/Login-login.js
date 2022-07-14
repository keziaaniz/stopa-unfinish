
import LoginForm from './components/Login-Form';
import RegisterForm from './components/Register-form';
import {Section, Container } from '../../styles';

function Login() {
  return (
    <Section>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-6">
              <ul className="nav nav-pills mb-3 nav-tabs nav-tabs-02 justify-content-center text-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Log in</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <LoginForm/>
                <RegisterForm/>
                <div className="login-social-media border ps-4 pe-4 pb-4 pt-0 rounded mt-5">
                  <div className="mb-4 d-block text-center"><b className="bg-white ps-2 pe-2 mt-3 d-block">Login or Sign in with</b></div>
                  <form className="row">
                    <div className="col-sm-12">
                      <a className="btn bg-facebook d-block mb-3 text-white" href="/#"><span><i className="fab fa-facebook-f"></i>Login with Facebook</span></a>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </Section>
    );
}

export default Login;