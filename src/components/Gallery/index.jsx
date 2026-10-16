import React, { useState } from 'react';

export default function Gallery({
    images = [],
    width = '100%',
    height = 'auto',
    radius = '0px',
    showThumbs = false,
    className = ''
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === images.length - 1;

    return (
        <div
            className={className}
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                maxWidth: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
            {/* Imagem Principal com Setas */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: typeof height === 'number' ? `${height}px` : height,
                    borderRadius: radius,
                    overflow: 'hidden',
                    backgroundColor: '#E2E3FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img
                    src={images[currentIndex]?.src}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: radius,
                        transition: 'opacity 0.3s ease'
                    }}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/1440x681?text=Slide+Banner';
                    }}
                />

                {/* Seta Esquerda */}
                <button
                    onClick={handlePrev}
                    disabled={isFirst}
                    style={{
                        position: 'absolute',
                        left: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.8)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isFirst ? 'not-allowed' : 'pointer',
                        opacity: isFirst ? 0.3 : 1,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        fontSize: '18px',
                        transition: 'opacity 0.2s'
                    }}
                    title="Imagem anterior"
                >
                    ‹
                </button>

                {/* Seta Direita */}
                <button
                    onClick={handleNext}
                    disabled={isLast}
                    style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.8)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isLast ? 'not-allowed' : 'pointer',
                        opacity: isLast ? 0.3 : 1,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        fontSize: '18px',
                        transition: 'opacity 0.2s'
                    }}
                    title="Próxima imagem"
                >
                    ›
                </button>
            </div>

            {/* Miniaturas (Thumbnails) */}
            {showThumbs && (
                <div
                    style={{
                        display: 'flex',
                        gap: '12px',
                        overflowX: 'auto',
                        paddingBottom: '8px'
                    }}
                >
                    {images.map((img, idx) => {
                        const isSelected = idx === currentIndex;
                        return (
                            <div
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                style={{
                                    width: '117px',
                                    height: '95px',
                                    borderRadius: radius,
                                    border: isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    backgroundColor: '#E2E3FF',
                                    flexShrink: 0,
                                    boxSizing: 'border-box'
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={`Miniatura ${idx + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    onError={(e) => {
                                        e.target.src = 'https://placehold.co/117x95?text=Thumb';
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}