import styled from 'styled-components'
// Style your elements here
export const GradientBgContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.hexCodeOne},
    ${props => props.hexCodeTwo}
  );
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CssColorGradient = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`

export const CssColorGradientHead = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`

export const UnorderedList = styled.ul`
  display: flex;
  padding-left: 0;
  width: 700px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`
export const PickTheColorHeading = styled.p`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 60px;
`
export const InputColorContainer = styled.div`
  display: flex;
`

export const ColorInputEleOne = styled.input`
  height: 45px;
  width: 100px;
  border-width: 0;
  outline: none;
  background-color: transparent;
`
export const ColorInputEleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`

export const HexaColorPara = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
`

export const GenerateBtn = styled.button`
  height: 36px;
  width: 110px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #334155;
  margin-top: 30px;
  background-color: #00c9b7;
`
