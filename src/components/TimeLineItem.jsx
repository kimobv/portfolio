import React from 'react';

function TimelineItem({ year, title, duration, details }) {
	return (
		<ol className="flex flex-col md-flex-row relative border-l border-stone-200 dark:border-l-stone-700">
			<li className="mb-10 ml-5">
				<div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white dark:border-l-stone-900 dark:bg-indigo-600" />
				<div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm dark:border-l-stone-900 ">
					<span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white">{year}</span>
					<h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
					<div className="margin-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">{duration}</div>
				</div>
				<p className="my-2 text-base font-normal text-stone-500 dark:text-stone-500">{details}</p>
			</li>
		</ol>
	);
}
export default TimelineItem;
