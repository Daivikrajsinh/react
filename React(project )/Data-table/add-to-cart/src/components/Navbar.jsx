const Navbar = ({boolean,setBoolean}) => {
  function handleClick(){
      setBoolean(!boolean)
  }

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight">EliteThreads</div>
      
      <div className="flex items-center space-x-8">
        <a href="#" className="hover:text-indigo-400 transition">Home</a>
        <a href="#" className="hover:text-indigo-400 transition">About</a>
        <a href="#" className="hover:text-indigo-400 transition">Features</a>
        <a href="#" className="hover:text-indigo-400 transition">Contact</a>
        
        <button 
          onClick={handleClick}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-full text-sm font-medium transition"
        >
          {boolean ? 'Hide Cart' : 'Show Cart'}
        </button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;