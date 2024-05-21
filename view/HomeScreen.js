// view/DetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const DetailScreen = () => {
  const [profile, setProfile] = useState({});
  const [suggestedAccounts, setSuggestedAccounts] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    fetchProfile();
    fetchSuggestedAccounts();
    fetchLikedVideos();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('https://65419d75f0b8287df1fe8b4a.mockapi.io/thick/1'); // Replace with your API
      setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSuggestedAccounts = async () => {
    try {
      const response = await axios.get('https://664c461035bbda10987f8fe2.mockapi.io/sug'); // Replace with your API
      setSuggestedAccounts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLikedVideos = async () => {
    try {
      const response = await axios.get('https://65419d75f0b8287df1fe8b4a.mockapi.io/like'); // Replace with your API
      setLikedVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profile.avatar }} // Use profile.avatar from API
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profile.name}</Text>
        <View style={styles.profileBioContainer}>
          <Text style={styles.profileBioText}>I love a colorful life </Text>
          <Icon name="heart" size={20} color="red" />
          <Icon name="heart" size={20} color="red" />
          <Icon name="heart" size={20} color="red" />
        </View>
        <Text style={styles.profileBio}>{profile.bio}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.likes}</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Follow" onPress={() => {}} />
          <Button title="Message" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.suggestedSection}>
        <View style={styles.suggestedHeader}>
          <Text style={styles.suggestedTitle}>Suggested accounts</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={suggestedAccounts}
          renderItem={({ item }) => (
            <View style={styles.suggestedAccount}>
              <Image source={{ uri: item.avatar }} style={styles.suggestedAvatar} />
              <Text style={styles.suggestedName}>{item.suggestedName}</Text>
             
              <Button title="Follow" onPress={() => {}} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.videosSection}>
        <View style={styles.tabs}>
          <Text style={styles.tab}>Videos</Text>
          <Text style={[styles.tab, styles.activeTab]}>Liked</Text>
        </View>
        <FlatList
          numColumns={2}
          data={likedVideos}
          renderItem={({ item }) => (
            <View style={styles.videoCard}>
              <Image source={{ uri: item.thumbnail }} style={styles.videoThumbnail} />
              <Text style={styles.videoViews}>{item.views} views</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileBioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileBioText: {
    fontSize: 16,
    color: 'gray',
  },
  profileBio: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  suggestedSection: {
    padding: 20,
  },
  suggestedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  suggestedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMore: {
    fontSize: 14,
    color: 'blue',
  },
  suggestedAccount: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  suggestedAvatar: {
    width: 100,
    height: 80,
    borderRadius: 30,
    marginBottom: 5,
  },
  suggestedName: {
    fontSize: 14,
    marginBottom: 5,
  },
  suggestedBioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  suggestedBioText: {
    fontSize: 14,
    color: 'gray',
  },
  videosSection: {
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 70,
    marginRight:70,
  },
  tab: {
    fontSize: 16,
    color: 'gray',
    marginRight: 20,
  },
  activeTab: {
    fontWeight: 'bold',
    color: 'black',
  },
  videoCard: {
    flex: 1,
    margin: 5,
  },
  videoThumbnail: {
    width: '100%',
    height: 150,
  },
  videoViews: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default DetailScreen;
