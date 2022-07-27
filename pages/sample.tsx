import anime from 'animejs';
import { useEffect } from 'react';
import styled from 'styled-components';

function Sample() {
    useEffect(() => {
        var elem = document.getElementById('elem');
        elem.addEventListener('click', function () {
            anime({
                targets: elem,
                translateX: 250
            })
        })
    }, []
    );

    return (
        <Wrapper>
            <Square className="square" id="elem"></Square>
        </Wrapper >
    );
}

const Wrapper = styled.div`
    padding: 20px;
`
const Square = styled.div`
    background-color: rgb(90, 135, 255);
    width: 50px;
    height: 50px;
    cursor: pointer;
`

export default Sample