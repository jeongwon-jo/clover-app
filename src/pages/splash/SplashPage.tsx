import LogoComponent from "components/logo/LogoComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashPage() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if(counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);}
    else {
      navigate("/login_home")
    }
  }, [counter, navigate]);
  
  return (
    <div className="splash">
      <div className="splash__contents">
        <LogoComponent theme={'white'} />
        <div className="splash__comments">
          <p>소중한 하루하루를 정리하며<br />
          행운의 네잎클로버를 모아보세요!</p>
        </div>
      </div>
    </div>
  )
}