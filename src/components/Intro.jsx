import React from 'react';

function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
			<h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold lg:mr-80">Kim Oliver</h1>
			<p className="text-base md:text-xl mb-10 font-medium lg:mr-80">Front-end developer</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2  mb-5 text-center">
				<img src="../assets/introArt.svg" alt="unDraw art of programmer in front of desk" className="my-auto" />
				<p className="text-md max-w-xl font-bold md:pt-20 px-2 my-5">
					Born in 1991 in Oslo, Norway
					<br />
					I've been dabbling with web development since 2007, and at the same time I've been trying a variety of things to find my path - I decided to become a developer.
					<br />
					Now I'm honing my skills in order to create solid and scalable frontend products with great user experiences.
				</p>
			</div>
		</div>
	);
}
export default Intro;
