import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CameraComponent from '@/components/CameraComponent';

export default function TabLayout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(!!token);
      if (!token) {
        router.replace("/auth/Login");
      }
    } catch (error) {
      router.replace("/auth/Login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return null;

  return isAuthenticated ? (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 80,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingBottom: 15,
            paddingTop: 5,
          },
          tabBarActiveTintColor: '#0047AB',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: '',
            tabBarButton: (props) => (
              <TouchableOpacity
                style={{
                  top: -30,  // Adjust this to move the button slightly higher or lower
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0047AB',  // Blue background color
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                onPress={() => setShowCamera(true)}
              >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Scan</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="history" // change the name to the history page
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <Ionicons name="folder-outline" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
          }}
        />
      </Tabs>
      {showCamera && (
        <CameraComponent
          isVisible={showCamera}
          onClose={() => setShowCamera(false)}
        />
      )}
    </>
  ) : null;
}
