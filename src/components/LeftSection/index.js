import React from 'react';
import { Container } from './styles';

const LeftSection = () => {
    return(
        <Container>
            <div className='all'>All</div>
            <div className='posted'>Posted</div>
            <div className='logout'>Logout</div>
        </Container>
    )
}

export default LeftSection;