import React, { useState } from 'react'
import styled from 'styled-components/native';
import { DetailStackCoin } from './Detail.stack.coin'

export const DetailStack = () => {
    return <Container>
        <DetailStackCoin />
        <DetailStackCoin />
        <DetailStackCoin />
        <DetailStackCoin />
        <DetailStackCoin />
        <DetailStackCoin />
        <DetailStackCoin />
    </Container>
}

const Container = styled.View`
    background-color: ${props => props.theme.BACKGROUND_COLOR_SECONDARY};
    height: 100%; 
    
`

