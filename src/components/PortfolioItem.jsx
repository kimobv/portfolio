import React from 'react';

function PortfolioItem({ title, about, imgUrl, stack, linkGit, linkLive }) {
	return (
		<div className="border-2 border-zinc-900 dark:border-white rounded-xl overflow-hidden">
			<img src={imgUrl} alt="portfolio" className="w-full h-48 object-cover object-top" />
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
				<p className="my-2 mb-4 text-base font-normal text-zinc-500 ">{about}</p>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
					{stack.map((item) => (
						<span key={item} className="inline-block px-2 py-1 font-semibold border-2 border-zinc-900 rounded-xl">
							{item}
						</span>
					))}
				</p>
				<br />
				<a href={linkGit} target="_blank" className="inline-block px-2 py-1 font-semibold border-2 bg-black text-white border-zinc-900 dark:border-white rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:underline cursor-pointer" alt={linkGit}>
					github
				</a>{' '}
				<a href={linkLive} target="_blank" className="inline-block px-2 py-1 font-semibold border-2 bg-black text-white border-zinc-900 dark:border-white rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:underline cursor-pointer" alt={linkLive}>
					live
				</a>
			</div>
		</div>
	);
}
export default PortfolioItem;
