import React from 'react';
import Logo from '../Logo';

function FooterInformations({ title, informations }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {informations.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} style={{ color: 'var(--light-gray-2)', fontSize: '14px', textDecoration: 'none' }}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    const infoInstitucional = [
        { text: 'Sobre Drip Store', link: '/about' },
        { text: 'Segurança', link: '/security' },
        { text: 'Wishlist', link: '/wishlist' },
        { text: 'Blog', link: '/blog' },
        { text: 'Trabalhe connosco', link: '/jobs' }
    ];

    const infoCategorias = [
        { text: 'Camisetas', link: '/produtos' },
        { text: 'Calças', link: '/produtos' },
        { text: 'Bonés', link: '/produtos' },
        { text: 'Headphones', link: '/produtos' },
        { text: 'Ténis', link: '/produtos' }
    ];

    return (
        <footer style={{ backgroundColor: 'var(--dark-gray)', color: 'var(--white)', padding: '60px 40px 24px', marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Bloco da Marca e Descrição */}
                <div style={{ maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Logo light />
                    <p style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--light-gray-2)' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '20px' }}>
                        <span>🌐</span>
                        <span>📸</span>
                        <span>🐦</span>
                    </div>
                </div>

                {/* Colunas de Informação */}
                <FooterInformations title="Informação" informations={infoInstitucional} />
                <FooterInformations title="Categorias" informations={infoCategorias} />

                {/* Contactos */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '240px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600' }}>Contacto</h4>
                    <p style={{ fontSize: '14px', color: 'var(--light-gray-2)', lineHeight: '22px' }}>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--light-gray-2)' }}>
                        (85) 3051-3411
                    </p>
                </div>
            </div>

            <hr style={{ borderColor: 'var(--dark-gray-3)', margin: '40px auto 20px', maxWidth: '1200px' }} />

            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--light-gray)' }}>
                © 2024 Digital Store
            </p>
        </footer>
    );
}