import React from "react";
import logo from './logo-2.png'
import CardComponent from "../components/card";

const MainScreen = () => {
	return (
		<>
			<div className="navbar glass">
				<div className="flex-1">
					<a href="/feed">
						<img
							src={logo}
							alt="Logo da marca"
							className="h-12 ml-4"
						/>
					</a>
				</div>
				<div className="flex-none gap-2">
					<div className="form-control">
						<input type="text" placeholder="Search" className="input input-bordered" />
					</div>
					<div className="dropdown dropdown-end mr-6 ml-3">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img alt="foto de login" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</div>
						</label>
						<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
							<li>
								<a href="/feed" className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li><a href="/">Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-4 mt-10 mr-10 ml-10">
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
				<CardComponent></CardComponent>
			</div>
		</>
	);
}

export default MainScreen;