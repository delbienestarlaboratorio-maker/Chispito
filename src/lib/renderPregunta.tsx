import React from 'react';

/**
 * Splits a pregunta string at placeholder tokens (___ or ???) and wraps each placeholder
 * in a styled span with class "blank‑placeholder".
 */
export function renderPregunta(pregunta: string): React.ReactNode {
    const parts = pregunta.split(/(___|\?\?\?)/g);
    return (
        <>
            {parts.map((part, idx) =>
                part === '___' || part === '???' ? (
                    <span key={idx} className="blank-placeholder" style={{
                        textDecoration: 'underline dotted',
                        fontWeight: 'bold',
                        color: '#D97706',
                        backgroundColor: '#FEF3C7',
                        padding: '0 4px',
                        borderRadius: '4px',
                        borderBottom: '2px dashed #D97706'
                    }}>
                        {part}
                    </span>
                ) : (
                    <span key={idx}>{part}</span>
                )
            )}
        </>
    );
}