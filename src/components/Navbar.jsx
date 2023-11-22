const Navbar = () => {
  return (
	<div className="mt-20 lg:mt-5 w-full h-screen p-1 grid grid-cols-1 lg:grid-cols-2 justify-start items-center">
		<div className="w-full p-1 space-y-5 flex flex-col justify-start">
			<h1 className="text-start uppercase text-xl text-[#00A699] leading-loose tracking-widest">special ingredients and nutrition food</h1>
			<p className="lg:text-start text-base text-justify leading-loose tracking-[0.1em]">Welcome to our recipe sharing platform! Discover a world of delicious recipes created by passionate home cooks and professional chefs. 
			Whether you are a culinary enthusiast or just looking for some kitchen inspiration, you have come to the right place. 
			Join our vibrant community and start exploring mouthwatering dishes today!</p>
			<button className="w-fit bg-[#00A699] shadow rounded px-5 py-2 text-lg">View Our Recipes</button>
		</div>
		<div className="w-full p-2">
			<img className="w-full h-fit" src="images/meals.png" alt="" />

		</div>
	</div>
  )
}

export default Navbar