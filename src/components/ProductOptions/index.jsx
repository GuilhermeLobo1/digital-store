import React, { useState } from 'react';

export default function ProductOptions({
    options = [],
    shape = 'square',
    radius = '4px',
    type = 'text',
    defaultValue
}) {
    const [selectedOption, setSelectedOption] = useState(defaultValue || options[0] || null);

    const isSquare = shape === 'square';
    const isColor = type === 'color';

    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {options.map((option, index) => {
                const isSelected = selectedOption === option;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedOption(option)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            outline: 'none',
                            transition: 'all 0.15s ease',
                            // Formato e Tamanho
                            width: isSquare ? '46px' : '31px',
                            height: isSquare ? '46px' : '31px',
                            borderRadius: isSquare ? radius : '50%',
                            // Cores dinâmicas para texto ou cor
                            backgroundColor: isColor
                                ? option
                                : isSelected
                                    ? 'var(--primary)'
                                    : 'transparent',
                            color: isColor
                                ? 'transparent'
                                : isSelected
                                    ? 'var(--white)'
                                    : 'var(--dark-gray-2)',
                            fontSize: '16px',
                            fontWeight: '600',
                            // Bordas
                            border: isColor
                                ? isSelected
                                    ? '2px solid var(--primary)'
                                    : '2px solid transparent'
                                : isSelected
                                    ? '1px solid var(--primary)'
                                    : '1px solid var(--light-gray-2)',
                            boxShadow: isColor && isSelected ? '0 0 0 2px var(--white) inset' : 'none'
                        }}
                    >
                        {!isColor && option}
                    </button>
                );
            })}
        </div>
    );
}