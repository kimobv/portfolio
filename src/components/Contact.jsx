import React from 'react';
import Title from './Title';

function Contact() {
	return (
		<div className="flex flex-col mb-20 mx-auto">
			<div className="flex justify-center items-center">
				<form action="https://getform.io/f/02314e7f-5150-442c-abd7-70b2216217ba" method="POST" className="flex flex-col w-full md:w-7/12">
					<Title>Contact</Title>
					<input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600" />
					<input type="email" name="email" placeholder="Email" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600" />
					<textarea name="messagwe" placeholder="Message" rows="5" className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600"></textarea>
					<button type="submit" className="text-center inline-block px-8 py-3 mx-auto w-max text-base font-medium rounded-md text-white bg-indigo-600 hover:underline hover:border-white dark:hover:border-white">
						Work With Me
					</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;
