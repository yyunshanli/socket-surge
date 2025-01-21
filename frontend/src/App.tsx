import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import Main from './pages/main.tsx';
import Login from './pages/login.tsx';

// component imports

function App() {
  return (

	<div>
		<BrowserRouter>
			<Routes>
				<Route index element={<Main/>}/>
				<Route path='login' element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	</div>
  );
}

export default App;
