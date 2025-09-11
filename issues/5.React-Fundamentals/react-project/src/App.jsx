import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelloWord from "./components/HelloWord";

export default function App() {
	const navigate = useNavigate();

	return (
		<div>
			<nav style={{ marginBottom: "20px" }}>
				<Link to='/'>Home</Link> | <Link to='/profile'>Profile</Link> |{" "}
				<button onClick={() => navigate("/profile")}>
					Ir a Profile con useNavigate
				</button>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>

			<HelloWord name='Oscar' />
			<HelloWord name='Alexis' />
			<HelloWord />
		</div>
	);
}
