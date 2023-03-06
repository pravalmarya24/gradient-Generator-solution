import {List, Button} from './styledComponents'

// Write your code here

const GradientDirectionItem = props => {
  const {eachDirection, onChangingDirection, isActiveBtn} = props
  const {displayText, directionId} = eachDirection

  const onClickingDirectionBtn = () => onChangingDirection(directionId)

  return (
    <List>
      <Button type="button" onClick={onClickingDirectionBtn} isActiveBtn>
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
