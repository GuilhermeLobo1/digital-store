import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export default function Gallery({
    className = '',
    width = 1440,
    height = 681,
    radius = '4px',
    showThumbs = false,
    images = []
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images.length) return null;

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === images.length - 1;

    const handlePrev = () => {
        if (!isFirst) setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (!isLast) setCurrentIndex((prev) => prev + 1);
    };

    const currentSlide = images[currentIndex];
    const isHeroBanner = Boolean(currentSlide.title);

    return (
        <div className={className} style={{ width: '100%', maxWidth: `${width}px`, margin: '0 auto' }}>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: isHeroBanner ? '520px' : 'auto',
                    aspectRatio: isHeroBanner ? 'unset' : `${width} / ${height}`,
                    borderRadius: radius,
                    overflow: 'hidden',
                    backgroundColor: isHeroBanner ? '#F5F5F5' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isHeroBanner ? (
                    <div
                        style={{
                            width: '100%',
                            padding: '60px 80px 80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '32px',
                            flexWrap: 'wrap',
                            boxSizing: 'border-box',
                            position: 'relative'
                        }}
                    >
                        {/* Coluna da Esquerda: Frase e Botão */}
                        <div style={{ flex: '1 1 380px', maxWidth: '510px', zIndex: 2 }}>
                            <span
                                style={{
                                    color: 'var(--warning)',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    display: 'block',
                                    marginBottom: '12px'
                                }}
                            >
                                {currentSlide.subtitle}
                            </span>

                            <h1
                                style={{
                                    fontSize: '56px',
                                    fontWeight: '800',
                                    color: 'var(--dark-gray)',
                                    lineHeight: '64px',
                                    margin: '0 0 20px 0'
                                }}
                            >
                                {currentSlide.title}
                            </h1>

                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--dark-gray-2)',
                                    lineHeight: '28px',
                                    marginBottom: '36px'
                                }}
                            >
                                {currentSlide.description}
                            </p>

                            <Link
                                to="/produtos"
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--white)',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    padding: '14px 52px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                }}
                            >
                                Ver Ofertas
                            </Link>
                        </div>

                        {/* Coluna da Direita: Ténis */}
                        <div
                            style={{
                                flex: '1 1 380px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            <img
                                src={currentSlide.src}
                                alt={currentSlide.title}
                                style={{
                                    width: '100%',
                                    maxWidth: '540px',
                                    maxHeight: '380px',
                                    objectFit: 'contain',
                                    filter: currentSlide.filter || 'none',
                                    transition: 'filter 0.3s ease'
                                }}
                            />
                        </div>

                        {/* Pontinhos decorativos laranjas no canto superior direito */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: '30px',
                                width: '120px',
                                height: '120px',
                                backgroundImage: 'radial-gradient(#F6AA1C 2px, transparent 2px)',
                                backgroundSize: '14px 14px',
                                opacity: 0.45,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }}
                        />

                        {/* Bolinhas de Paginação no fundo do Banner */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '28px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '10px',
                                zIndex: 3
                            }}
                        >
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCurrentIndex(idx)}
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        backgroundColor: currentIndex === idx ? 'var(--primary)' : 'var(--light-gray-2)',
                                        transition: 'background-color 0.2s'
                                    }}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <img
                        src={currentSlide.src}
                        alt={`Slide ${currentIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: radius
                        }}
                    />
                )}

                {/* Seta Esquerda */}
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isFirst}
                    style={{
                        position: 'absolute',
                        left: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isFirst ? 'not-allowed' : 'pointer',
                        opacity: isFirst ? 0.35 : 1,
                        zIndex: 4
                    }}
                    aria-label="Anterior"
                >
                    <img src={arrowLeft} alt="Anterior" style={{ width: '16px', height: '16px' }} />
                </button>

                {/* Seta Direita */}
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={isLast}
                    style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isLast ? 'not-allowed' : 'pointer',
                        opacity: isLast ? 0.35 : 1,
                        zIndex: 4
                    }}
                    aria-label="Próximo"
                >
                    <img src={arrowRight} alt="Próximo" style={{ width: '16px', height: '16px' }} />
                </button>
            </div>

            {/* Miniaturas na ProductViewPage */}
            {showThumbs && (
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginTop: '16px',
                        justifyContent: 'space-between',
                        overflowX: 'auto'
                    }}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: '117px',
                                height: '95px',
                                borderRadius: radius,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: currentIndex === idx ? '2px solid var(--primary)' : '2px solid transparent',
                                boxSizing: 'border-box',
                                flexShrink: 0,
                                backgroundColor: '#FFFFFF'
                            }}
                        >
                            <img
                                src={img.src}
                                alt={`Miniatura ${idx + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}