import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelloWorldPage from "./pages/HelloWordPage";
import CounterPage from "./pages/CounterPage";
import UserInputPage from "./pages/UserInputPage";
import UseEffectPage from "./pages/UseEffectPage";

export default function App() {
	const navigate = useNavigate();
	return (
		<div>
			<div className='bg-red-400 mb-10 text-2xl font-bold'>
				<nav className='flex items-center'>
					<Link to='/' className='m-3'>
						Home
					</Link>{" "}
					<Link to='/profile' className='m-4'>
						Profile
					</Link>
					<Link to='/helloWordPage' className='m-4'>
						{" "}
						Hello World
					</Link>
					<Link to='/counterPage' className='m-4'>
						{" "}
						Counter
					</Link>
					<Link to='/UserInputPage' className='m-4'>
						{" "}
						User Input
					</Link>
					<Link to='/UseEffectPage' className='m-4'>
						{" "}
						Use Effect
					</Link>
					<button
						className='ml-auto btn-class m-4'
						onClick={() => navigate("/")}
					>
						Return to home
					</button>
				</nav>
			</div>

			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/HelloWordPage' element={<HelloWorldPage />} />
					<Route path='/CounterPage' element={<CounterPage />} />
					<Route path='/UserInputPage' element={<UserInputPage />} />
					<Route path='/UseEffectPage' element={<UseEffectPage />} />
				</Routes>
			</div>
		</div>
	);
}
