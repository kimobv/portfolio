import React from 'react';
import Title from './Title';

function Contact() {
	return (
		<div className="mb-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mx-auto px-auto text-center">
			<div className="flex justify-center items-center">
				<form action="https://getform.io/f/02314e7f-5150-442c-abd7-70b2216217ba" method="POST" className="flex flex-col mb-10 w-full md:w-10/12">
					<Title>Contact</Title>
					<input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600" />
					<input type="email" name="email" placeholder="Email" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600" />
					<textarea name="messagwe" placeholder="Message" rows="5" className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none focus:border-indigo-600"></textarea>
					<button type="submit" className="text-center inline-block px-8 py-3 mx-auto w-max text-base font-medium rounded-md text-white bg-indigo-600 hover:underline hover:border-white dark:hover:border-white">
						Message Me
					</button>
				</form>
			</div>
			<img src="../assets/email.svg" className="flex my-auto mx-auto md:w-10/12" alt="" />
		</div>
	);
}
export default Contact;
