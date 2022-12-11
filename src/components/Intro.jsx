import React from 'react';

function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Kim Oliver</h1>
			<p className="text-base md:text-xl mb-3 font-medium">Front-end developer</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				Born in 1991 in Oslo, Norway.
				<br />
				I've been dabbling with web development since 2007, and at the same time I've been trying a variety of things to find my path - I decided to become a developer. Now I'm honing my skills in order to create solid and scalable frontend products with great user experiences.
			</p>
		</div>
	);
}
export default Intro;
