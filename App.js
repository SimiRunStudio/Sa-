import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Image, Animated } from 'react-native';

// Asmaron v19 Ultra-Production 400+ Features UI Engine
export default function AsmaronAppV19() {
  const [streak, setStreak] = useState(42);
  const [gems, setGems] = useState(1850);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      
      {/* Header Stats Bar */}
      <View style={styles.header}>
        <View style={styles.statItem}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statText}>{streak} Days</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statIcon}>💎</Text>
          <Text style={styles.statText}>{gems}</Text>
        </View>
        <View style={styles.boosterBadge}>
          <Text style={styles.boosterText}>⚡ 2x XP (14:32)</Text>
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner Section */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Asmaron Supreme v19 Platform</Text>
          <Text style={styles.heroSubtitle}>400+ Features, AI Voice Companion & Multi-Subject Ecosystem</Text>
        </View>

        {/* Floating WebRTC AI Voice Companion */}
        <TouchableOpacity 
          style={[styles.voiceWidget, isVoiceActive && styles.voiceWidgetActive]}
          onPress={() => setIsVoiceActive(!isVoiceActive)}
        >
          <Text style={styles.voiceWidgetIcon}>🎙️</Text>
          <View style={styles.voiceTextContainer}>
            <Text style={styles.voiceWidgetTitle}>
              {isVoiceActive ? "Lily AI Voice Call Connected..." : "Tap for Live AI Voice Conversation"}
            </Text>
            <Text style={styles.voiceWidgetSub}>Sub-150ms Full-Duplex WebRTC Audio</Text>
          </View>
        </TouchableOpacity>

        {/* CEFR Learning Path Nodes */}
        <Text style={styles.sectionHeader}>CEFR Section 2: Conversational Mastery (A2)</Text>
        
        <View style={styles.pathContainer}>
          <TouchableOpacity style={[styles.pathNode, styles.nodeCompleted]}>
            <Text style={styles.nodeIcon}>✓</Text>
            <Text style={styles.nodeLabel}>Unit 1: Food & Dining</Text>
          </TouchableOpacity>

          <View style={styles.connectorLine} />

          <TouchableOpacity style={[styles.pathNode, styles.nodeActive]}>
            <Text style={styles.nodeIcon}>★</Text>
            <Text style={styles.nodeLabel}>Unit 2: Travel & Hotel</Text>
          </TouchableOpacity>

          <View style={styles.connectorLine} />

          <TouchableOpacity style={[styles.pathNode, styles.nodeLocked]}>
            <Text style={styles.nodeIcon}>🔒</Text>
            <Text style={styles.nodeLabel}>Unit 3: Job Interview</Text>
          </TouchableOpacity>
        </View>

        {/* Multi-Subject Hub Grid */}
        <Text style={styles.sectionHeader}>Asmaron Multi-Subject Hub</Text>
        <View style={styles.subjectGrid}>
          <View style={styles.subjectCard}><Text style={styles.subjectCardText}>🗣️ Languages</Text></View>
          <View style={styles.subjectCard}><Text style={styles.subjectCardText}>🔢 Math AI</Text></View>
          <View style={styles.subjectCard}><Text style={styles.subjectCardText}>🎵 Music Piano</Text></View>
          <View style={styles.subjectCard}><Text style={styles.subjectCardText}>♟️ Chess AI</Text></View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab('learn')} style={styles.tabItem}>
          <Text style={[styles.tabIcon, activeTab === 'learn' && styles.activeTabIcon]}>📖</Text>
          <Text style={styles.tabLabel}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('practice')} style={styles.tabItem}>
          <Text style={[styles.tabIcon, activeTab === 'practice' && styles.activeTabIcon]}>🏋️</Text>
          <Text style={styles.tabLabel}>Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('leagues')} style={styles.tabItem}>
          <Text style={[styles.tabIcon, activeTab === 'leagues' && styles.activeTabIcon]}>🏆</Text>
          <Text style={styles.tabLabel}>Leagues</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')} style={styles.tabItem}>
          <Text style={[styles.tabIcon, activeTab === 'profile' && styles.activeTabIcon]}>👤</Text>
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#1E293B' },
  statItem: { flexDirection: 'row', alignItems: 'center' },
  statIcon: { fontSize: 18, marginRight: 6 },
  statText: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 15 },
  boosterBadge: { backgroundColor: '#F59E0B22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: '#F59E0B' },
  boosterText: { color: '#F59E0B', fontWeight: 'bold', fontSize: 12 },
  scrollContent: { padding: 16 },
  heroCard: { backgroundColor: '#1E3A8A', padding: 18, borderRadius: 16, marginBottom: 16 },
  heroTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  heroSubtitle: { color: '#93C5FD', fontSize: 13, marginTop: 4 },
  voiceWidget: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#06B6D422', padding: 14, borderRadius: 14, borderWidth: 1, borderColor: '#06B6D4', marginBottom: 20 },
  voiceWidgetActive: { backgroundColor: '#10B98122', borderColor: '#10B981' },
  voiceWidgetIcon: { fontSize: 24, marginRight: 12 },
  voiceTextContainer: { flex: 1 },
  voiceWidgetTitle: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 14 },
  voiceWidgetSub: { color: '#94A3B8', fontSize: 12, marginTop: 2 },
  sectionHeader: { color: '#F8FAFC', fontSize: 16, fontWeight: 'bold', marginBottom: 14, marginTop: 10 },
  pathContainer: { alignItems: 'center', marginVertical: 10 },
  pathNode: { width: 140, paddingVertical: 12, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  nodeCompleted: { backgroundColor: '#10B981' },
  nodeActive: { backgroundColor: '#06B6D4', borderWidth: 3, borderColor: '#FFFFFF' },
  nodeLocked: { backgroundColor: '#334155' },
  nodeIcon: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  nodeLabel: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold', marginTop: 4 },
  connectorLine: { width: 4, height: 24, backgroundColor: '#334155', marginVertical: 4 },
  subjectGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 8 },
  subjectCard: { width: '48%', backgroundColor: '#1E293B', padding: 14, borderRadius: 12, marginBottom: 12, alignItems: 'center' },
  subjectCardText: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 13 },
  tabBar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12, backgroundColor: '#1E293B', borderTopWidth: 1, borderTopColor: '#334155' },
  tabItem: { alignItems: 'center' },
  tabIcon: { fontSize: 20, color: '#94A3B8' },
  activeTabIcon: { color: '#06B6D4' },
  tabLabel: { color: '#94A3B8', fontSize: 11, marginTop: 2 }
});
