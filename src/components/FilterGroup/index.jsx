import React from 'react';

export default function FilterGroup({ title, inputType = 'checkbox', options = [] }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h4
                style={{
                    fontSize: '14px',
                    color: 'var(--dark-gray-2)',
                    fontWeight: '700',
                    marginBottom: '12px'
                }}
            >
                {title}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {options.map((opt, index) => {
                    const inputId = `${title}-${index}-${opt.value || opt.text}`;
                    return (
                        <label
                            key={index}
                            htmlFor={inputId}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '14px',
                                color: 'var(--dark-gray-2)',
                                cursor: 'pointer'
                            }}
                        >
                            <input
                                id={inputId}
                                type={inputType}
                                name={inputType === 'radio' ? title : undefined}
                                value={opt.value || opt.text}
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    accentColor: 'var(--primary)',
                                    cursor: 'pointer'
                                }}
                            />
                            {opt.text}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}