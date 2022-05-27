import React from 'react';

import {TailSpin} from "react-loader-spinner";


import styled from 'styled-components';



const LoaderComponent = () => {
    return (
      <>
        <Loader2>
            <TailSpin
                type="TailSpin"
                color="#dc6c2c"
                height={20}
                width={20}
                //timeout={1000} //3 secs
            />
        </Loader2>

       </>
    );
};

export default LoaderComponent;


const Loader2 = styled.div`


  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: bg 1s;
  margin:50px
`