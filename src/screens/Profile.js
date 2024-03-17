
import React, { useState, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableValues, setEditableValues] = useState({
    username: "John Doe",
    password: "********",
    email: 'abc@gmail.com',
    location: 'PUCIT New Campus',
  });
  const usernameInputRef = useRef(null); // Declare usernameInputRef here

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleSavePress = () => {
    
    setIsEditing(false);
  };

  const YourAdsClicked=()=>
  {
    console.log('clicked');
    navigation.navigate('My Ads');
  }

  const handleChange = (key, value) => {
    setEditableValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/phone_1.jpg')}
          />
          <Text style={styles.username}>{editableValues.username}</Text>
          <Text style={styles.profileText}>Manage your profile info</Text>
        </View>
        <View style={styles.profileDetailsContainer}>
          <View style={[
          styles.profileDetail,
          isEditing ? { flexDirection: 'column' } : { flexDirection: 'row' }
        ]}>
            <Text style={styles.detailsText}>Username</Text>
            {isEditing ? (
              <TextInput
                ref={usernameInputRef}
                style={styles.input}
                value={editableValues.username}
                onChangeText={text => handleChange('username', text)}
              />
            ) : (
                <Text style={styles.detailsTextSmaller}>{editableValues.username}</Text>
            )}
          </View>
          <View style={[
          styles.profileDetail,
          isEditing ? { flexDirection: 'column' } : { flexDirection: 'row' }
        ]}>
            <Text style={styles.detailsText}>Password</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={editableValues.password}
                onChangeText={text => handleChange('password', text)}
              />
            ) : (
              <Text  style={styles.detailsTextSmaller}>{editableValues.password}</Text>
            )}
          </View>
          <View style={[
          styles.profileDetail,
          isEditing ? { flexDirection: 'column' } : { flexDirection: 'row' }
        ]}>
            <Text style={styles.detailsText}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={editableValues.email}
                onChangeText={text => handleChange('email', text)}
              />
            ) : (
              <Text  style={styles.detailsTextSmaller}>{editableValues.email}</Text>
            )}
          </View>
          <View style={[
          styles.profileDetail,
          isEditing ? { flexDirection: 'column' } : { flexDirection: 'row' }
        ]}>
            <Text style={styles.detailsText}>Location</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={editableValues.location}
                onChangeText={text => handleChange('location', text)}
              />
            ) : (
              <Text  style={styles.detailsTextSmaller}>{editableValues.location}</Text>
            )}
          </View>
          {!isEditing && (
            <TouchableOpacity style={[
              styles.profileDetail,
              isEditing ? { flexDirection: 'column' } : { flexDirection: 'row' }
            ]}
             onPress={YourAdsClicked}>
              <Text style={styles.detailsText}>Your Ads</Text>
              <FontAwesome5 name='angle-right' color={'black'} size={24}/>
            </TouchableOpacity>
          )}
        </View>
        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <MaterialIcons name='edit' color='black' size={24}/>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
    //borderWidth: 1,
  },
  profileHeader: {
    alignItems: 'center',
    //borderWidth: 1,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileText: {
    marginTop: 20,
    fontSize: 16,
  },
  profileDetailsContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  profileDetail: {
    //flexDirection: 'column', // Changed to column
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'flex-start', // Align items to the start
    borderBottomColor:'#CCC3C3',
    borderBottomWidth:1,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  detailsTextSmaller: {
    fontSize: 14,
    marginTop:5,
    //fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    width: '100%', // Fill the container horizontally
  },
  editButton: {
    position: 'absolute',
    bottom: -40,
    right: 10,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    position: 'absolute',
    //top:130,
    bottom: -40,
    right: 10,
    backgroundColor: 'green',
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;






