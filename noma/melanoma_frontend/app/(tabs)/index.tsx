import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi Marina</Text>
          <Text style={styles.subtitle}>Let's keep your skin healthy.</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#0047AB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={24} color="#0047AB" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.checkmarkContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
        </View>
        <View>
          <Text style={styles.statusText}>You are on track.</Text>
          <Text style={styles.reminderText}>Next scan reminder in 10 days.</Text>
        </View>
      </View>

      <View style={styles.newsSection}>
        <View style={styles.newsHeader}>
          <Text style={styles.newsTitle}>Infos & News</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.newsCard}>
          <View style={styles.newsImagePlaceholder} />
          <View style={styles.newsContent}>
            <Text style={styles.newsCardTitle}>
              Diagnosis of skin cancer - what happens next?
            </Text>
            <Text style={styles.newsPreview}>
              It is a diagnosis that is frightening and often leaves those affected and their family ...
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    padding: 4,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  statusCard: {
    backgroundColor: '#E8F5E9',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkmarkContainer: {
    marginRight: 12,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2E7D32',
  },
  reminderText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  newsSection: {
    padding: 20,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  viewAllText: {
    color: '#0047AB',
    fontSize: 14,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImagePlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#E5E5E5',
  },
  newsContent: {
    padding: 16,
  },
  newsCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  newsPreview: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});
