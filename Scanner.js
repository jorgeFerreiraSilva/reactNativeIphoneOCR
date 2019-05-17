import React, {useState} from 'react'
import { View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import DocumentScanner from 'react-native-document-scanner'


 function Scanner () {
    
  const { navigate } = useNavigation()
  const [ , setState ] = useState({image:''})

  return (
    <View style={{flex: 1}}>
      <DocumentScanner
        style={{ width: 500, height: 800 }}
        useBase64={true}
        saveInAppDocument={true}
        onPictureTaken={
          data => {
            navigate('ShowImage', { image: data.croppedImage })
          }
        }
        overlayColor="rgba(255,130,0, 0.9)"
        enableTorch={false}
        brightness={0}
        saturation={1}
        contrast={1.1}
        quality={0.5}
        onRectangleDetect={({ stableCounter, lastDetectionType }) => setState({  
          stableCounter,
          lastDetectionType
         })}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
    </View>
  );
  
}


export default Scanner