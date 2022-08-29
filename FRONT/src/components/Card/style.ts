import styled from 'styled-components'
import { colors, fontSizes } from '../../theme'

export const Container = styled.div`
  border-radius: 25px;
  background: ${colors.gray1};
  min-width: 200px;
  max-height: 160px;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`

export const HeaderFooter = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  margin: 0;
  font-size: ${fontSizes.headlineMedium};
`

export const Content = styled.section`
  font-size: ${fontSizes.body};
  overflow-y: auto;

  code {
    padding: 5px;
    background: ${colors.gray2};
  }
`

export const TitleInput = styled.input`
  border-radius: 10px;
  border: ${`0.5px ${colors.typography} solid`};
  width: 100%;
  padding: 6px;
  &:focus {
    outline: none;
    border: ${`1.5px ${colors.typography} solid`};
  }
`

export const ContentTextArea = styled.textarea`
  border: ${`0.5px ${colors.typography} solid`};
  width: 93%;
  min-height: 60px;
  border-radius: 10px;
  padding: 6px;
  &:focus {
    outline: none;
    border: ${`1.5px ${colors.typography} solid`};
  }
`
