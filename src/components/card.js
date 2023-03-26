const CardComponent = ({ title, imageUrl, ingredients, url }) => {
	return (
		<div className="card card-compact w-5/12 bg-base-100 shadow-xl">
			<figure className="h-40 overflow-hidden"><img className="w-full h-full object-cover object-center" src={imageUrl} alt="Shoes" /></figure>
			<div className="card-body">
				<h3 className="card-title">{title}</h3>
				<p>{ingredients.join(', ').substring(0, 65) + '...'}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">
						<a href={url} target="_blank" rel="noopener noreferrer">
							LETS COOK
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;