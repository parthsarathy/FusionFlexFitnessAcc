import React from 'react';

function Button({ children, onClick, style }) {
    return (
        <button
            onClick={onClick}
            style={{
                background: '#ff6600',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 28px',
                fontWeight: 600,
                fontSize: '1rem',
                marginRight: '16px',
                cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                ...style,
            }}
        >
            {children}
        </button>
    );
}

export default Button;
