import type React from 'react';

function Text(props: Props & React.HTMLProps<HTMLSpanElement>) {
    const { size, children, ...rest} = props;
    const newStyle: React.CSSProperties = {};
    if (size) {
        if (typeof size === 'string') {
            newStyle.fontSize = size;
        } else if (typeof size === 'number') {
            newStyle.fontSize = `${size}px`;
        }
    }
    return <span {...{...rest, style:{...rest.style, ...newStyle}}}>{children}</span>;
}

interface Props{
    children: React.ReactNode;
    size?: string | number;
}

export default Text;
