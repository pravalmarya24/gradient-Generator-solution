import {Component} from 'react'
import {
  CssColorGradient,
  Form,
  GradientBgContainer,
  UnorderedList,
  PickTheColorHeading,
  InputColorContainer,
  ColorInputEleOne,
  ColorInputEleContainer,
  GenerateBtn,
  HexaColorPara,
  CssColorGradientHead,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    inputOne: '#8ae323',
    inputTwo: '#014f7b',
    formInputOne: '#8ae323',
    formInputTwo: '#014f7b',
    directionVal: 'top',
    directionOb: 'top',
    isActiveBtn: false,
  }

  onChangeHexCodeOne = event => {
    console.log(event.target.value)
    this.setState({inputOne: event.target.value})
  }

  onChangeHexCodeTwo = event => {
    console.log(event.target.value)
    this.setState({inputTwo: event.target.value})
  }

  onGenerateForm = event => {
    event.preventDefault()
    const {inputOne, inputTwo, directionVal} = this.state
    this.setState({
      formInputOne: inputOne,
      formInputTwo: inputTwo,
      directionOb: directionVal,
    })
  }

  onChangingDirection = directionId => {
    const filteredVal = gradientDirectionsList.filter(
      each => each.directionId === directionId,
    )
    console.log(filteredVal[0].directionId === directionId)

    if (filteredVal[0].directionId === directionId) {
      this.setState({directionVal: filteredVal[0].value})
    }

    this.setState(prevState => ({
      isActiveBtn: !prevState.isActiveBtn,
    }))
  }

  render() {
    const {
      formInputOne,
      formInputTwo,
      inputOne,
      inputTwo,
      directionOb,
      isActiveBtn,
    } = this.state
    console.log(directionOb)
    return (
      <GradientBgContainer
        hexCodeOne="formInputOne"
        hexCodeTwo="formInputTwo"
        direction={directionOb}
        data-testid="gradientGenerator"
      >
        <Form onSubmit={this.onGenerateForm}>
          <CssColorGradientHead>
            Generate a CSS Color Gradient
          </CssColorGradientHead>
          <CssColorGradient>Choose Direction</CssColorGradient>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                eachDirection={each}
                onChangingDirection={this.onChangingDirection}
                isActiveBtn={isActiveBtn}
              />
            ))}
          </UnorderedList>
          <PickTheColorHeading>Pick the Colors</PickTheColorHeading>
          <InputColorContainer>
            <ColorInputEleContainer>
              <HexaColorPara>{formInputOne}</HexaColorPara>
              <ColorInputEleOne
                type="color"
                onChange={this.onChangeHexCodeOne}
                value={inputOne}
              />
            </ColorInputEleContainer>
            <ColorInputEleContainer>
              <HexaColorPara>{formInputTwo}</HexaColorPara>
              <ColorInputEleOne
                type="color"
                onChange={this.onChangeHexCodeTwo}
                value={inputTwo}
              />
            </ColorInputEleContainer>
          </InputColorContainer>
          <GenerateBtn type="submit">Generate</GenerateBtn>
        </Form>
      </GradientBgContainer>
    )
  }
}

export default GradientGenerator
