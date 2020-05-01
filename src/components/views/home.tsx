import React from "react";

export interface HomeProps{

}

export default function Home(props: HomeProps) {
	return (
		<div id="home">
			<div className="brief">
				<div className="name">Greg Zanchelli</div>
				<div className="pipe">|</div>
				<div className="desc">
					acoustical engineer, developer, maker
				</div>
			</div>
		</div>
	); 
}