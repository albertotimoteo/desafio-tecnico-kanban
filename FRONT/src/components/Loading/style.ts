import styled from 'styled-components'
import { colors } from '../../theme'

export const LoadingSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;
  border: ${`10px solid ${colors.gray1}`};
  border-top: ${`10px solid ${colors.primary}`};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
