import React from "react";
import Image from "./photography-nature-background-h2ifm0bbe638sw4p.jpg";
function Landing_page() {
	return (
		<section
			className="section-container"
			style={{
				backgroundImage: `url(${Image})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<main>
				<h1>Nature Reserve</h1>
				<div>
					<p>Welcome to the nature reserve.</p>
				</div>
				<div>
					<p>A new way to experience nature.</p>
				</div>
				<div>
					<button>Shop now</button>
				</div>
			</main>
		</section>
	);
}

export default Landing_page;
