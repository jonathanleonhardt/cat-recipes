import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo-2.png'
import perfil from './perfil.png'
import CardComponent from "../components/card";

async function fetchData(query) {
	const response = await axios(`/api/recipe/search/?page=1&query=${query}`, {
		headers: {
			"Authorization": "Token 9c8b06d329136da358c2d00e76946b0111ce2c48"
		}
	});
	return response.data.results;
}

const MainScreen = () => {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState(null);

	useEffect(() => {
		async function getData() {
			const result = await fetchData(search);
			console.log(result);
			setData(result);
		}
		getData();
	}, [search]);

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
						<input type="text" placeholder="Search" className="input input-bordered" value={search} onChange={(e) => setSearch(e.target.value)} />
					</div>
					<div className="dropdown dropdown-end mr-6 ml-3">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img alt="foto de login" src={perfil} />
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
				{search === null || search === "" ? (<p>Type in search bar...</p>) : (<>
					{data ? (
						data.map((item) => (
							<CardComponent title={item.title} imageUrl={item.featured_image} ingredients={item.ingredients}></CardComponent>
						))
					) : (
						<p>Loading...</p>
					)}
				</>)}
			</div>
		</>
	);
}

export default MainScreen;