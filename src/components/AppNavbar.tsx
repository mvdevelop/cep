import { useState, type FormEvent, type ChangeEvent } from 'react';
import { FaSearch, FaUser, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/icon.ico';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search)}`);
    setSearch('');
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto !px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2"><img src={logo} alt="Logo" className="w-10 h-10" /></a>
        <button type="button" aria-label="Abrir menu" className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen((open) => !open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H4" /></svg>
        </button>
        <div className={`flex-col lg:flex-row lg:flex items-center gap-6 absolute lg:static bg-gray-900 w-full left-0 top-16 lg:top-0 p-4 lg:p-0 transition-all ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 font-medium"><a href="/" className="hover:text-blue-400">Home</a><a href="#conteudo" className="hover:text-blue-400">Conteúdo</a><a href="#extra" className="hover:text-blue-400">Extra</a><a href="#sobre" className="hover:text-blue-400">Sobre</a><a href="#contato" className="hover:text-blue-400">Contato</a></div>
          <form className="flex items-center gap-2 mt-3 lg:mt-0" onSubmit={handleSubmit}><input type="search" value={search} onChange={handleSearchChange} placeholder="Buscar..." className="px-3 py-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" /><button type="submit" aria-label="Buscar" className="px-3 py-1.5 rounded-md border border-gray-400 hover:bg-gray-700"><FaSearch /></button></form>
          <div className="flex gap-3 mt-4 lg:mt-0"><button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-400 hover:bg-gray-700"><FaUser /> Login</button><button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200"><FaUserPlus /> Signup</button></div>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
