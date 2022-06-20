import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'BAHANI BILLEL',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro voluptatem quos necessitatibus, cupiditate quam quaerat, libero sapiente eius a, repellendus nihil nostrum! Ipsam soluta quasi cupiditate impedit. Expedita ex repudiandae, magnam possimus accusantium ducimus ea iure soluta amet assumenda nisi. Quae ducimus quia rerum velit voluptatum quidem libero aperiam minima.',
    image: require('../assets/bahani-yellow.png'),
  },
  {
    id: 2,
    title: 'BAHANI BILLEL',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eum similique pariatur sed. Fugiat voluptatibus porro minus, tempora temporibus provident dolorem necessitatibus, hic ad commodi debitis. Officiis obcaecati tempore sint!',
    image: require('../assets/bahani-red.png'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
    // call the server to delete the message from the backend
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/bahani-red.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
