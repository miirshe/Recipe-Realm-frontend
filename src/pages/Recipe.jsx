import { Link } from 'react-router-dom'
const Recipe = () => {
	return (
		<div className="mt-24 w-full p-4">
			<p className=" text-start p-5 shadow-xl rounded text-lg space-x-3"> <Link to='/'>Home</Link> / <span className=" text-[#00A699]">Our Recipe</span></p>
		</div>
	)
}

export default Recipe