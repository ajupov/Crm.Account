import styled from 'styled-components'
import { withClick } from '../../@hocs/Clickable'

export const ButtonStyled = withClick(styled.button`
    cursor: pointer;
    background: transparent;
    padding: 12px 24px;
    margin-right: 12px;
    outline: none;
    border-radius: 2px;
    border: 1px solid white;
    color: white;
    font-size: 1em;
    &:hover {
        background: rgba(127, 140, 141, 0.2);
    }
    &:active {
        background: rgba(127, 140, 141, 0.8);
    }
    &:last-of-type {
        margin-right: 0;
    }
`)
