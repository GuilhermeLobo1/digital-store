import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import miniCart from '../../assets/mini-cart.svg';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [buscaMobileAberta, setBuscaMobileAberta] = useState(false);
    const [termoBusca, setTermoBusca] = useState('');
    const navigate = useNavigate();

    const realizarBusca = () => {
        if (termoBusca.trim()) {
            navigate(`/produtos?filter=${encodeURIComponent(termoBusca.trim())}`);
        } else {
            navigate('/produtos');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            realizarBusca();
        }
    };

    return (
        <header
            style={{
                backgroundColor: 'var(--white)',
                borderBottom: '1px solid var(--light-gray-3)',
                padding: '20px 0 16px',
                position: 'relative',
                zIndex: 100
            }}
        >
            <div
                style={{
                    maxWidth: '1240px',
                    margin: '0 auto',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                {/* Linha Superior */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* Esquerda: Botão Hambúrguer (Mobile) + Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            type="button"
                            onClick={() => setMenuAberto(true)}
                            className="mobile-only"
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '5px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px'
                            }}
                            aria-label="Abrir menu"
                        >
                            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--dark-gray-2)' }} />
                            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--dark-gray-2)' }} />
                            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--dark-gray-2)' }} />
                        </button>

                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }} className="mobile-only">
                                <Logo />
                            </div>
                            <div className="desktop-only">
                                <Logo />
                            </div>
                        </Link>
                    </div>

                    {/* Ícones da Direita no Mobile (Lupa para abrir/fechar busca + Carrinho) */}
                    <div className="mobile-only" style={{ alignItems: 'center', gap: '16px' }}>
                        <button
                            type="button"
                            onClick={() => setBuscaMobileAberta((prev) => !prev)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '20px',
                                cursor: 'pointer',
                                color: buscaMobileAberta ? 'var(--primary)' : 'var(--light-gray)',
                                padding: '4px'
                            }}
                            aria-label="Abrir pesquisa"
                        >
                            🔍
                        </button>

                        <div style={{ position: 'relative', marginRight: '6px' }} title="Carrinho">
                            <img src={miniCart} alt="Carrinho" style={{ width: '24px', height: '24px' }} />
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-10px',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--white)',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    borderRadius: '50%',
                                    width: '16px',
                                    height: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                2
                            </span>
                        </div>
                    </div>

                    {/* 3.1.2 - Campo de Busca no Desktop (sempre visível) */}
                    <div
                        className="desktop-only"
                        style={{
                            flex: '1',
                            maxWidth: '560px',
                            position: 'relative',
                            alignItems: 'center'
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Pesquisar produto..."
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={{
                                width: '100%',
                                height: '50px',
                                padding: '0 50px 0 20px',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: 'var(--light-gray-3)',
                                fontSize: '14px',
                                outline: 'none',
                                color: 'var(--dark-gray-2)',
                                boxSizing: 'border-box'
                            }}
                        />
                        <button
                            type="button"
                            onClick={realizarBusca}
                            style={{
                                position: 'absolute',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--light-gray)',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }}
                            aria-label="Buscar"
                        >
                            🔍
                        </button>
                    </div>

                    {/* 3.1.3 e 3.1.4 - Área de Redirecionamento e Carrinho (Desktop) */}
                    <div className="desktop-only" style={{ alignItems: 'center', gap: '24px' }}>
                        <Link
                            to="/cadastro"
                            style={{
                                color: 'var(--dark-gray-2)',
                                fontSize: '16px',
                                textDecoration: 'underline'
                            }}
                        >
                            Cadastre-se
                        </Link>

                        <Link
                            to="/login"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: 'var(--white)',
                                width: '114px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '14px'
                            }}
                        >
                            Entrar
                        </Link>

                        <div style={{ position: 'relative' }} title="Carrinho">
                            <img src={miniCart} alt="Carrinho" style={{ width: '24px', height: '24px' }} />
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-10px',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--white)',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    borderRadius: '50%',
                                    width: '16px',
                                    height: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                2
                            </span>
                        </div>
                    </div>
                </div>

                {/* Barra de Busca Mobile Expansível (Largura 100% para digitar facilmente!) */}
                {buscaMobileAberta && (
                    <div
                        className="mobile-only"
                        style={{
                            width: '100%',
                            position: 'relative',
                            alignItems: 'center'
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Pesquisar produto..."
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            style={{
                                width: '100%',
                                height: '48px',
                                padding: '0 48px 0 16px',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: 'var(--light-gray-3)',
                                fontSize: '14px',
                                outline: 'none',
                                color: 'var(--dark-gray-2)',
                                boxSizing: 'border-box'
                            }}
                        />
                        <button
                            type="button"
                            onClick={realizarBusca}
                            style={{
                                position: 'absolute',
                                right: '14px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary)',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }}
                            aria-label="Executar busca"
                        >
                            🔍
                        </button>
                    </div>
                )}

                {/* 3.1.5 - Navegação Principal (Desktop) */}
                <nav className="desktop-only" style={{ gap: '32px' }}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                            borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                            paddingBottom: '4px',
                            textDecoration: 'none',
                            fontWeight: isActive ? '700' : '400',
                            fontSize: '16px'
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/produtos"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                            borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                            paddingBottom: '4px',
                            textDecoration: 'none',
                            fontWeight: isActive ? '700' : '400',
                            fontSize: '16px'
                        })}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                            borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                            paddingBottom: '4px',
                            textDecoration: 'none',
                            fontWeight: isActive ? '700' : '400',
                            fontSize: '16px'
                        })}
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to="/pedidos"
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
                            borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                            paddingBottom: '4px',
                            textDecoration: 'none',
                            fontWeight: isActive ? '700' : '400',
                            fontSize: '16px'
                        })}
                    >
                        Meus Pedidos
                    </NavLink>
                </nav>
            </div>

            {/* Menu Mobile Drawer */}
            {menuAberto && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                        display: 'flex'
                    }}
                    onClick={() => setMenuAberto(false)}
                >
                    <div
                        style={{
                            width: '280px',
                            maxWidth: '80%',
                            height: '100%',
                            backgroundColor: 'var(--white)',
                            padding: '30px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--dark-gray-2)', marginBottom: '20px' }}>
                            Páginas
                        </h4>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <NavLink to="/" onClick={() => setMenuAberto(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)', fontWeight: isActive ? '700' : '500', textDecoration: isActive ? 'underline' : 'none', fontSize: '16px' })}>
                                Home
                            </NavLink>
                            <NavLink to="/produtos" onClick={() => setMenuAberto(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)', fontWeight: isActive ? '700' : '500', textDecoration: isActive ? 'underline' : 'none', fontSize: '16px' })}>
                                Produtos
                            </NavLink>
                            <NavLink to="/categorias" onClick={() => setMenuAberto(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)', fontWeight: isActive ? '700' : '500', textDecoration: isActive ? 'underline' : 'none', fontSize: '16px' })}>
                                Categorias
                            </NavLink>
                            <NavLink to="/pedidos" onClick={() => setMenuAberto(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)', fontWeight: isActive ? '700' : '500', textDecoration: isActive ? 'underline' : 'none', fontSize: '16px' })}>
                                Meus Pedidos
                            </NavLink>
                        </nav>

                        <div style={{ marginTop: 'auto' }}>
                            <hr style={{ borderColor: 'var(--light-gray-2)', borderWidth: '0.5px', marginBottom: '20px' }} />
                            <Link to="/login" onClick={() => setMenuAberto(false)} style={{ display: 'block', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '12px 0', borderRadius: '4px', fontWeight: '700', textDecoration: 'none', fontSize: '14px', marginBottom: '16px' }}>
                                Entrar
                            </Link>
                            <Link to="/cadastro" onClick={() => setMenuAberto(false)} style={{ display: 'block', textAlign: 'center', color: 'var(--dark-gray-2)', fontSize: '16px', textDecoration: 'underline' }}>
                                Cadastre-se
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}