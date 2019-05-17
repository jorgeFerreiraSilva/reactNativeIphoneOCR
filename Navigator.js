import { createStackNavigator, createAppContainer } from 'react-navigation'
import Scanner from './Scanner'
import ShowImage from './ShowImage'


const AppNavigator = createStackNavigator({
  Scanner: {
    screen: Scanner
  },
  ShowImage: {
    screen: ShowImage
  }
})

export default createAppContainer(AppNavigator)
