'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'mask': {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
        'zIndex': 10000
    },
    'maskHidden': {
        'display': 'none'
    },
    'panel': {
        'position': 'fixed',
        'backgroundColor': '#fff',
        'width': 'auto',
        'height': 'auto',
        'top': '50%',
        'left': '50%',
        'borderRadius': '5px',
        'boxSizing': 'border-box',
        'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'transform': 'translate3d(-50%, -50%, 0)',
        'transition': 'transform 500ms cubic-bezier(0, 0, 0.25, 1), opacity 500ms cubic-bezier(0, 0, 0.25, 1)',
        'zIndex': 10001
    },
    'panelHidden': {
        'transform': 'translate3d(calc(-50% - 100px), -50%, 0)',
        'opacity': 0,
        'zIndex': -1,
        'height': 0,
        'width': 0,
        'overflow': 'hidden'
    }
};