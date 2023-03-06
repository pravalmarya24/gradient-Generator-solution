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
    formInputOne: '',
    formInputTwo: '',
  }

  onChangeHexCodeOne = event => {
    console.log(event.target.value)
    this.setState({inputOne: event.target.value})
  }

  onChangeHexCodeTwo = event => {
    console.log(event.target.value)
    this.setState({inputOne: event.target.value})
  }

  onGenerateForm = () => {
    const {inputOne, inputTwo} = this.state
    this.setState({formInputOne: inputOne, formInputTwo: inputTwo})
  }

  render() {
    const {formInputOne, formInputTwo, inputOne, inputTwo} = this.state
    return (
      <GradientBgContainer hexCodeOne={formInputOne} hexCodeTwo={formInputTwo}>
        <Form onSubmit={this.onGenerateForm}>
          <CssColorGradient>Generate a CSS Color Gradient</CssColorGradient>
          <CssColorGradient headline>Choose Direction</CssColorGradient>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                eachDirection={each}
              />
            ))}
          </UnorderedList>
          <PickTheColorHeading>Pick the Colors</PickTheColorHeading>
          <InputColorContainer>
            <ColorInputEleContainer data-testid="gradientGenerator">
              <p>{inputOne}</p>
              <ColorInputEleOne
                type="color"
                onChange={this.onChangeHexCodeOne}
                value={inputOne}
              />
            </ColorInputEleContainer>
            <ColorInputEleContainer>
              <p>{inputTwo}</p>
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
