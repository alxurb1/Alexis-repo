import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelloWorldPage from "./pages/HelloWordPage";
import CounterPage from "./pages/CounterPage";
import UserInputPage from "./pages/UserInputPage";
import UseEffectPage from "./pages/UseEffectPage";
import MemoOptimizingPage from "./pages/MemoOptimizingPage";
import FormikPage from "./pages/FormikPage";
import CallbackPage from "./pages/CallbackPage";
import I18nImpl from "./pages/I18nextImplementation";
import BuggyCode1 from "./pages/BuggyCode1";
import BugFix from "./pages/BugFix";

export default function App() {
	const navigate = useNavigate();
	return (
		<div>
			<div className='bg-red-400 mb-10 text-xl font-bold'>
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
					<Link to='/MemoOptimizingPage' className='m-4'>
						{" "}
						Use Memo
					</Link>
					<Link to='/FormikPage' className='m-4'>
						{" "}
						Formik
					</Link>
					<Link to='/CallbackPage' className='m-4'>
						{" "}
						Callback
					</Link>
					<Link to='/I18nImpl' className='m-4'>
						{" "}
						Traduccion
					</Link>
					<Link to='/BuggyCode1' className='m-4'>
						{" "}
						Buggy Code
					</Link>
					<Link to='/BugFix' className='m-4'>
						{" "}
						Fix Bug
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
					<Route path='/MemoOptimizingPage' element={<MemoOptimizingPage />} />
					<Route path='/CallbackPage' element={<CallbackPage />} />
					<Route path='/FormikPage' element={<FormikPage />} />
					<Route path='/I18nImpl' element={<I18nImpl />} />
					<Route path='/BuggyCode1' element={<BuggyCode1 />} />
					<Route path='/BugFix' element={<BugFix />} />
				</Routes>
			</div>
		</div>
	);
}
