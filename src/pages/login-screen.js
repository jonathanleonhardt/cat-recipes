import React from "react";
import logo from './logo.png'

const LoginScreen = () => {
	return (
		<div className="bg-cover bg-center h-screen flex items-center justify-center"
			style={{ backgroundImage: `url('https://cdn.e-konomista.pt/uploads/2019/02/cozinhar-para-gatos.jpg')` }}>
			<div className="shadow-md rounded px-8 pt-12 pb-8 mb-4 flex flex-col items-center"
				style={{ backgroundColor: '#FCFCFC' }}>
				<img
					src={logo}
					alt="Logo da marca"
					className="h-20 w-50 mb-10"
				/>

				<form className="w-full max-w-sm">
					<div className="mb-4">
						<label
							className="font-extrabold"
							htmlFor="email"
						>
							E-mail
						</label>
						<input
							className="input input-bordered w-full max-w-xs"
							id="email"
							type="email"
							placeholder="Digite seu e-mail"
						/>
					</div>
					<div className="mb-6">
						<label
							className="font-extrabold"
							htmlFor="password"
						>
							Senha
						</label>
						<input
							className="input input-bordered w-full max-w-xs"
							id="password"
							type="password"
							placeholder="Digite sua senha"
						/>
					</div>
					<div className="pt-4 pb-4">
						<a href="/feed" className="btn btn-primary w-80">
							Entrar
						</a>
					</div>
					<a href="/feed" className="link link-primary pl-20">ou continue sem login...</a>
				</form>
			</div>
		</div>
	);
}

export default LoginScreen;
