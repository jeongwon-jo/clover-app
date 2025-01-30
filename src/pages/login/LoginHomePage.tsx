import LogoComponent from "components/logo/LogoComponent";
import { Link } from "react-router-dom";

export default function LoginHomePage() {

  return (
    <div className="login">
      <div className="login__inner">
        <LogoComponent />
        <div className="login__btns">
          <Link to={'/login'} className="btn btn-lg btn-w100p btn_black">이메일로 시작하기</Link>
          <button type="button" className="btn btn-lg btn-w100p btn_kakao"><span>카카오톡으로 시작하기</span></button>
          <button type="button" className="btn btn-lg btn-w100p btn_google"><span>Google로 시작하기</span></button>
          <Link to={'/signup'} className="btn-link btn_signup">계정만들기</Link>
        </div>
      </div>
    </div>
  )
}