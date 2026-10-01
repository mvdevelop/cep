import { Link } from 'react-router-dom';

const logo = '/icon.ico';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-5 mt-auto" id="contato">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4"><img src={logo} alt="Logo CEP" className="w-12 h-12 mr-2" /><h2 className="text-xl font-bold">CEP</h2></div>
            <p className="text-gray-400 text-sm leading-relaxed">O CEP (Copa do Ensino Público) é uma plataforma criada para organizar e centralizar conteúdos de reforço escolar para estudantes de escolas públicas.</p>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-3 text-sm tracking-wide">Navegação</h3>
            <ul className="space-y-2 text-gray-300 text-sm"><li><Link to="/" className="hover:text-white">Home</Link></li><li><Link to="/#conteudo" className="hover:text-white">Conteúdo</Link></li><li><Link to="/#extra" className="hover:text-white">Extra</Link></li></ul>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-3 text-sm tracking-wide">Recursos</h3>
            <ul className="space-y-2 text-gray-300 text-sm"><li><Link to="/#sobre" className="hover:text-white">Sobre</Link></li><li><Link to="/#extra" className="hover:text-white">Curiosidades</Link></li></ul>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-3 text-sm tracking-wide">Contato</h3>
            <p className="text-gray-400 text-sm">contato@cep.education</p><p className="text-gray-400 text-sm">São Paulo, Brasil</p>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center text-gray-400 text-sm">© {new Date().getFullYear()} <strong>CEP</strong> — Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;
