import styled from 'styled-components';

import breakpoint from '../utils/breakpoint.js';

function getColWidth(span) {
    if (!span) {
        return null;
    }
    let width = span * 100 / 12;
    return `
        width: calc(${width.toFixed(8)}% - 30px);
    `;
}

function getColMargin(span) {
    if (!span) {
        return null;
    }
    let width = span * 100 / 12;
    return `margin-left: ${width}%;`;
}

const Col = styled.div`
    position: relative;
    width: calc(100% - 30px);
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

    ${({ xs }) => (xs && getColWidth(xs))};

    @media (min-width: ${breakpoint.SM}px) {
        ${({ sm }) => (sm && getColWidth(sm))};
    }
    @media (min-width: ${breakpoint.MD}px) {
        ${({ md }) => md && getColWidth(md)};
    }
    @media (min-width: ${breakpoint.LG}px) {
        ${({ lg }) => lg && getColWidth(lg)};
    }

    @media (min-width: ${breakpoint.XL}px) {
        ${({ xl }) => xl && getColWidth(xl)};
    }

    /**
     * xsOffset, smOffset, mdOffset, lgOffset, xsOffset
     */
    ${({ xsOffset }) => (xsOffset !== null && xsOffset !== undefined && getColMargin(xsOffset))};

    @media (min-width: ${breakpoint.SM}px) {
        ${({ smOffset }) => (smOffset !== null && smOffset !== undefined && getColMargin(smOffset))};
    }

    @media (min-width: ${breakpoint.MD}px) {
        ${({ mdOffset }) => mdOffset !== null && mdOffset !== undefined && getColMargin(mdOffset)};
    }

    @media (min-width: ${breakpoint.LG}px) {
        ${({ lgOffset }) => lgOffset !== null && lgOffset !== undefined && getColMargin(lgOffset)};
    }

    @media (min-width: ${breakpoint.XL}px) {
        ${({ xlOffset }) => xlOffset !== null && xlOffset !== undefined && getColMargin(xlOffset)};
    }
`;

export default Col;
