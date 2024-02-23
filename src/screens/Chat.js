

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Chat = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('John Doe');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'John Doe', time: getCurrentDateTime() },
    { id: 2, text: 'Hi there!', sender: 'Jane Smith', time: getCurrentDateTime() },
  ]);

  // Image paths for different users
  const userImages = {
    'John Doe': require('../../assets/phone_1.jpg'),
    'Jane Smith': require('../../assets/phone_2.jpg'),
  };

 

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        text: message.trim(),
        sender: username,
        time: getCurrentDateTime(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username}</Text>
        <Text style={styles.dateTime}>{getCurrentDateTime()}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[styles.message, msg.sender === username ? styles.sentMessage : styles.receivedMessage]}>
            {msg.sender !== username && (
              <View style={styles.avatarContainer}>
                <Image source={userImages[msg.sender]} style={styles.avatar} />
              </View>
            )}
            <View style={[styles.messageContent, msg.sender === username ? styles.sentMessageContent : styles.receivedMessageContent]}>
              <Text style={msg.sender === username ? styles.sentText : styles.receivedText}>{msg.text}</Text>
              <Text style={styles.time}>{msg.time}</Text>
            </View>
            {msg.sender === username && (
              <View style={styles.avatarContainer}>
                <Image source={userImages[msg.sender]} style={styles.avatar}  size={24}/>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
        <MaterialCommunityIcons name='send' size={24} color={'#6A6363'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTime: {
    fontSize: 12,
    color: 'grey',
  },
  chatContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    maxWidth: '70%',
  },
  avatarContainer: {
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageContent: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    //borderWidth:1,
  },
  sentMessageContent: {
    backgroundColor:  '#F5EBEB',
  },
  receivedMessageContent: {
    backgroundColor: '#DCF8C6',
  },
  sentMessage: {
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
  },
  sentText: {
    color: 'green',
  },
  receivedText: {
    color: 'black',
  },
  time: {
    fontSize: 10,
    color: 'grey',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom:15,
    marginLeft:20,
    marginRight:20,
  },
  input: {
    height: 40,
    borderRadius: 20,
  },
  sendButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  icon:
  {
   color:'#6A6363'
  },
});

export default Chat;


