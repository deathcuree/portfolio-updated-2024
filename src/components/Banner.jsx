import React from "react";
import solo_picture from "../assets/solo_picture.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Icons from "./Icons";

const Banner = () => {
	return (
		<section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-secondary lg:text-left">
						{/* name */}
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className=" text-[55px] font-bold leading-[0.8] lg:text-[110px]">
							GRACE <span>ANDAYA</span>
						</motion.h1>
						{/* expertise */}
						<motion.div
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
							<span className="text-white mr-4">I am a</span>
							<TypeAnimation
								sequence={["Junior", 2000, "Web Developer", 2000]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0">
							Exploring the depths of technology to create innovative solutions that redefine
							possibilities.
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<Link to="contact">
								<button className="btn btn-lg">Contact me</button>
							</Link>
							<Link to="project">
								<p className="text-gradient btn-link">My Portfolio</p>
							</Link>
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.6 }}
							className="flex flex-wrap justify-center items-center text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
							<Icons />
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn("down", 0.3)}
						initial="hidden"
						whileInView={"show"}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] rounded-full">
						<div className="rounded-full overflow-hidden">
							<img src={solo_picture} alt="solo" className="w-full h-full object-cover" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
