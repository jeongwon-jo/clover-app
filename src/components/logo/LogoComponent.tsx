import clover from "asset/images/common/clover.png";
import cloverWhite from "asset/images/common/clover_white.png";

interface ThemeProps {
  theme?: string
}

export default function LogoComponent({theme}: ThemeProps) {
  return (
    <div className="clover">
      <div className="clover_img">
        <img src={theme === "white" ? cloverWhite : clover} alt="" />
      </div>
      <h2 className={theme === "white" ? "white" : ""}>Clover</h2>
    </div>
  )
}