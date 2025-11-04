const Navbar = () => {
    return <div className="flex items-center justify-between shadow-[#cd5a08] shadow-md py-4 px-8">
        <div className="w-52"><img src="public\logo-removebg-preview.png" alt="logo" /></div>
        <ul className="flex items-center justify-center gap-7 text-black font-bold text-xl">
            <li className="hover:text-white hover:bg-[#cd5a08] p-2 rounded-3xl">Home</li>
            <li className="hover:text-white hover:bg-[#cd5a08] p-2 rounded-3xl">About</li>
        </ul>
    </div>
}


export default Navbar;