import styled from 'styled-components'
import { withClick } from '../../@hocs/Clickable'

export const ButtonStyled = withClick(styled.button`
    background: white;
    padding: 10px 20px;
    outline: none;
    border-radius: 2px;
`)
