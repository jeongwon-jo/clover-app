import Header from "components/Header";
import LogoComponent from "components/logo/LogoComponent";

export default function LoginPage() {
  return (
    <>
      <Header headerTitle={'이메일 로그인'}/>
      <div className="login">
        <div className="login__inner">
          <div className="login__form">
            <LogoComponent />
            <form action="" className="form-login">
              <fieldset>
                <div className="form_input">
                  <div className="input_contents">
                    <input type="text" placeholder="이메일을 입력하세요." />
                  </div>
                </div>
                <div className="form_input">
                  <div className="input_contents">
                    <input type="text" placeholder="패스워드를 입력하세요." />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="login__btns">
            <button type="button" className="btn btn-lg btn-w100p btn_black">로그인 하기</button>
          </div>
        </div>
    </div>
    </>
  )
}