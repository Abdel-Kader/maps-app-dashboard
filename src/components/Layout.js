import {
	CollectionIcon,
	HomeIcon,
	UserIcon,
	LocationMarkerIcon,
} from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";

export const Layout = (props) => {
	const { children } = props;
	return (
		<>
			<nav
				className="
				flex bg-gray-900
				pt-2
				md:pt-1
				pb-1
				px-1
				mt-0
				h-20
				fixed
				w-full
				z-20
				top-0
			"
			>
				<div className="flex flex-wrap items-center">
					<div
						className="
						flex flex-shrink
						md:w-1/3
						justify-center
						md:justify-start
                        ml-4
						text-white
					"
					>
						<Link to="/">
							<span className="text-xl pl-2">
								<i className="font-bold text-2xl">DirectAid</i>
							</span>
						</Link>
					</div>
				</div>
			</nav>
			<div className="flex flex-col md:flex-row">
				<div
					className="shadow-xl
					h-16
					fixed
					bottom-0
					mt-18 md:min-h-screen
					z-10
					w-full
					md:w-48
				"
					style={{ backgroundColor: "#2c9948" }}
				>
					<div
						className="
						md:mt-20 md:fixed md:left-0 md:top-0
						content-center
						md:content-start
						text-center
						justify-between
					"
					>
						<ul
							className="
							list-reset
							flex flex-row
							md:flex-col
							py-0
							px-1
							md:px-2
							
							w-44
							text-center
							md:text-left
						"
						>
							<li className="pr-3 flex-1 hover:bg-gray-900">
								<NavLink
									to="/"
									className="
									md:flex
									md:justify-start
									items-center
									grid
									justify-center
									justify-items-center
									py-1
									md:py-3
									pl-0
									md:pl-1
									align-middle
									text-white
									no-underline
									hover:text-white
								"
								>
									<HomeIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2" />
									<span
										className="
										pb-1
										md:pb-0
										text-xs
										md:text-base
										text-white
										md:text-white
										block
										md:inline-block
									"
									>
										Dashboard
									</span>
								</NavLink>
							</li>
							<li className="pr-3 flex-1 hover:bg-gray-900">
								<NavLink
									to="/projets"
									className="
									md:flex
									items-center
									md:justify-start
									grid
									justify-center
									justify-items-center
									py-1
									md:py-3
									pl-0
									md:pl-1
									align-middle
									text-white
									no-underline
									hover:text-white
								"
								>
									<CollectionIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2" />
									<span
										className="
										pb-1
										md:pb-0
										text-xs
										md:text-base
										text-white
										md:text-white
										block
										md:inline-block
									"
									>
										Projets
									</span>
								</NavLink>
							</li>
							<li className="pr-3 flex-1 hover:bg-gray-900">
								<NavLink
									to="/users"
									className="
									md:flex
									items-center
									md:justify-start
									content-center
									grid
									justify-center
									justify-items-center
									py-1
									md:py-3
									pl-0
									md:pl-1
									align-middle
									text-white
									no-underline
									hover:text-white
								"
								>
									<UserIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2" />
									<span
										className="
										pb-1
										md:pb-0
										text-xs
										md:text-base
										text-white
										md:text-white
										block
										md:inline-block
									"
									>
										Utilisateurs
									</span>
								</NavLink>
							</li>
							<li className="pr-3 flex-1 hover:bg-gray-900">
								<NavLink
									to="/maps"
									className="
									md:flex
									items-center
									md:justify-start
									content-center
									grid
									justify-center
									justify-items-center
									py-1
									md:py-3
									pl-0
									md:pl-1
									align-middle
									text-white
									no-underline
									hover:text-white
								"
								>
									<LocationMarkerIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2" />
									<span
										className="
										pb-1
										md:pb-0
										text-xs
										md:text-base
										text-white
										md:text-white
										block
										md:inline-block
									"
									>
										Maps
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<div className="main-content w-full  mt-12 md:mt-20 pb-24 md:pb-5">
						<div className="flex flex-wrap">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};
