import React from 'react';

function TimelineItem({ year, title, details }) {
	return (
		<ol className="flex flex-col md-flex-row relative border-l border-zinc-200 dark:border-l-zinc-700">
			<li className="mb-10 ml-5">
				<div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border-white dark:border-l-zinc-900 dark:bg-indigo-600" />
				<div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm dark:border-l-zinc-900 ">
					<span className="inline-block px-2 py-1 font-semibold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white">{year}</span>
					<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
				</div>
				<p className="my-2 text-base font-normal text-zinc-500 dark:text-zinc-500">{details}</p>
			</li>
		</ol>
	);
}
export default TimelineItem;
