import React from 'react'
import { Image, View, Text } from 'react-native'
import { useNavigationParam } from 'react-navigation-hooks'

function ShowImage() {
  const image = useNavigationParam('image')
  console.log(image)
    return (
      <View style={{flex: 1}}>
        <Text>Entrou aqui</Text>
        <Image
        style={{flex: 1}}
        source={{ uri: `data:image/jpeg;base64,${image}`}} resizeMode="contain" />
      </View>
    )
}
  export default ShowImage
