import {List, Button} from './styledComponents'

// Write your code here

const GradientDirectionItem = props => {
  const {eachDirection} = props
  const {displayText} = eachDirection
  return (
    <List>
      <Button type="button">{displayText}</Button>
    </List>
  )
}

export default GradientDirectionItem
