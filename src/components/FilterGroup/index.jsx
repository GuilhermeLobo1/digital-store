import React from 'react';

export default function FilterGroup({
    title,
    inputType = 'checkbox',
    options = [],
    selectedValues = [],
    onChange
}) {
    const handleChange = (val) => {
        if (onChange) {
            onChange(val);
        }
    };

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
                    const value = opt.value || opt.text;
                    const inputId = `${title}-${index}-${value}`;
                    const isChecked = Array.isArray(selectedValues)
                        ? selectedValues.includes(value)
                        : selectedValues === value;

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
                                value={value}
                                checked={isChecked}
                                onChange={() => handleChange(value)}
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