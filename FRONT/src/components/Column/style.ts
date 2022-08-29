import styled from 'styled-components'
import { colors, fontSizes } from '../../theme'

export const Container = styled.article`
  padding: 7px;
  background: ${colors.gray2};
  min-width: 250px;
  width: 200px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: ${fontSizes.headlineBig};
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 0px;
`
