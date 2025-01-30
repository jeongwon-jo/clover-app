import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import SplashPage from "pages/splash/SplashPage";
import LoginHomePage from "pages/login/LoginHomePage";
import LoginPage from "pages/login/LoginPage";

export default function Router() {
	return (
		<Routes>
			<>
        <Route path="/loading" element={<SplashPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login_home" element={<LoginHomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </>
		</Routes>
	);
}