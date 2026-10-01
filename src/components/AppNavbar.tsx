import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FaSearch, FaUser, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const logo = '/icon.ico';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearch('');
    setIsOpen(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto !px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" aria-label="Página inicial">
          <img src={logo} alt="Logo CEP" className="w-10 h-10" />
        </Link>
        <button type="button" aria-label="Abrir menu" aria-expanded={isOpen} className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen((open) => !open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H4" /></svg>
        </button>
        <div className={`flex-col lg:flex-row lg:flex items-center gap-6 absolute lg:static bg-gray-900 w-full left-0 top-16 lg:top-0 p-4 lg:p-0 transition-all ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 font-medium"><Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link><Link to="/#conteudo" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Conteúdo</Link><Link to="/#extra" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Extra</Link><Link to="/#sobre" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Sobre</Link></div>
          <form className="flex items-center gap-2 mt-3 lg:mt-0" onSubmit={handleSubmit}><input type="search" value={search} onChange={handleSearchChange} placeholder="Buscar..." aria-label="Buscar conteúdo" className="px-3 py-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" /><button type="submit" aria-label="Buscar" className="px-3 py-1.5 rounded-md border border-gray-400 hover:bg-gray-700"><FaSearch aria-hidden="true" /></button></form>
          <div className="flex gap-3 mt-4 lg:mt-0"><button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-400 hover:bg-gray-700"><FaUser aria-hidden="true" /> Login</button><button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200"><FaUserPlus aria-hidden="true" /> Cadastro</button></div>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
