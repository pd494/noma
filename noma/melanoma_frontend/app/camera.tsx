import React from 'react';
import { View } from 'react-native';
import CameraComponent from '@/components/CameraComponent';

export default function CameraScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CameraComponent 
        visible={true} 
        onClose={() => {}} 
        onCapture={() => {}} 
        onPrediction={() => {}} 
      />
    </View>
  );
}
