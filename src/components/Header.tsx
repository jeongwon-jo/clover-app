import { useNavigate } from "react-router-dom";

interface HeaderProps {
  headerTitle?: string;
}

export default function Header({headerTitle}:HeaderProps) {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <div className="header__inner">
        <button type="button" className="btn_back" onClick={() => navigate(-1)}></button>
        <div className="header__title">
          <h3>{headerTitle}</h3>
        </div>
      </div>
    </header>
  )
}