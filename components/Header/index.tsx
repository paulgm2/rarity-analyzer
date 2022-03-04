import * as React from "react";
import Link from "next/link";
import DarkMode from "../DarkMode";

const Header = () => {
	const color = process.env.NEXT_PUBLIC_PRIMARY_COLOR || "indigo";
	return (
		<header className="h-16 px-5 py-5 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between print:hidden dark:text-gray-100">
			<div className="flex items-center justify-between w-full max-w-screen-xl mx-auto space-x-4">
				<div className="flex items-center">
					<Link href="/">
						<a className="flex items-center">
							{process.env.NEXT_PUBLIC_COLLECTION_LOGO && (
								<img
									style={{ maxWidth: "180px", maxHeight: "50px" }}
									src={process.env.NEXT_PUBLIC_COLLECTION_LOGO}
									alt={`${process.env.NEXT_PUBLIC_SITENAME}'s logo`}
								/>
							)}
							{!process.env.NEXT_PUBLIC_COLLECTION_LOGO && (
								<span className="sm:inline-block hidden text-lg font-semibold dark:text-gray-200">
									{process.env.NEXT_PUBLIC_SITENAME || "site name"}
								</span>
							)}
						</a>
					</Link>
				</div>
				<div className="flex-grow"></div>
				<div className="text-sm flex-shrink-0">
					<div className="flex items-center justify-center space-x-1">
						<a
							className="mr-3 px-3 py-2 dark:active:text-gray-900 dark:text-gray-200 dark:border-gray-200 hover:opacity-100 hover:bg-gray-100  dark:hover:bg-gray-800  dark:active:bg-gray-700 active:bg-gray-100 rounded-md inline-flex transition-all ease-in-out duration-300"
							href={process.env.NEXT_PUBLIC_WEBSITE_URL}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							Back to the website
						</a>
						<a
							className={`hidden lg:block inline-flex justify-center items-center px-4 py-2 rounded-md bg-${color}-400 text-white font-medium transition-all hover:bg-${color}-200 dark:hover:bg-${color}-200 ease-in-out duration-200`}
							href={process.env.NEXT_PUBLIC_TOFU}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							View on Tofu NFT
						</a>
						<a
							className={`hidden lg:block inline-flex justify-center items-center px-4 py-2 rounded-md bg-${color}-400 text-white font-medium transition-all hover:bg-${color}-200 dark:hover:bg-${color}-200 ease-in-out duration-200`}
							href={process.env.NEXT_PUBLIC_AREAX}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							View on AreaX NFT
						</a>
						<DarkMode />
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
