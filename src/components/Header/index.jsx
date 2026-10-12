import { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const navLinkStyle = ({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
        fontWeight: isActive ? '600' : '400',
        borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
        paddingBottom: '6px',
        transition: 'all 0.2s ease'
    });

    return (
        <header style={{ backgroundColor: 'var(--white)', padding: '24px 40px 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            {/* Linha Superior: Logo, Busca, Login e Carrinho */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                <Link to="/">
                    <Logo />
                </Link>

                {/* Campo de pesquisa */}
                <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '500px', display: 'flex', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 44px 12px 16px',
                            borderRadius: '8px',
                            border: 'none',
                            backgroundColor: 'var(--light-gray-3)',
                            fontSize: '14px',
                            outline: 'none',
                            color: 'var(--dark-gray)'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            fontSize: '18px',
                            cursor: 'pointer'
                        }}
                        title="Pesquisar"
                    >
                        🔍
                    </button>
                </form>

                {/* Área de Autenticação e Carrinho */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link
                        to="/cadastro"
                        style={{
                            fontSize: '16px',
                            color: 'var(--dark-gray-2)',
                            textDecoration: 'underline'
                        }}
                    >
                        Cadastre-se
                    </Link>

                    <Link
                        to="/login"
                        style={{
                            width: '114px',
                            height: '40px',
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '14px'
                        }}
                    >
                        Entrar
                    </Link>

                    {/* Carrinho */}
                    <div style={{ cursor: 'pointer', fontSize: '22px' }} title="Carrinho">
                        🛒
                    </div>
                </div>
            </div>

            {/* Linha Inferior: Menus de Navegação */}
            <nav style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
                <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                <NavLink to="/produtos" style={navLinkStyle}>Produtos</NavLink>
                <NavLink to="/categorias" style={navLinkStyle}>Categorias</NavLink>
                <NavLink to="/pedidos" style={navLinkStyle}>Meus Pedidos</NavLink>
            </nav>
        </header>
    );
}