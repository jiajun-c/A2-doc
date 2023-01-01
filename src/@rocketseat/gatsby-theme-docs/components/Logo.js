import React from 'react';

export default function Logo(props) {
    return (
        <svg width="180" height="34" xmlns="http://www.w3.org/2000/svg">
            <g>
                <title>background</title>
                <rect fill="#fff" id="canvas_background" height="36" width="182" y="-1" x="-1"/>
                <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                    <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                </g>
            </g>
            <g>
                <title>Layer 1</title>
                <text font-style="italic" font-weight="bold" text-anchor="start" font-family="Euphoria, sans-serif" font-size="24" id="svg_1" y="26.149994" x="19.5" stroke-width="0" stroke="#000" fill="#000000">LUG@HUST</text>
            </g>
        </svg>
    );
}
