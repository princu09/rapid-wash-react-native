import React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = ({title}) => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="view-grid-outline"
        color="#F9A8D4"
        size={20}
        onPress={() => {
          alert("I'm Slidebar");
        }}
      />
      <Appbar.Content title={title} />
      <Appbar.Action
        icon="bell-badge"
        color="#F9A8D4"
        onPress={() => {
          alert("I'm Bell");
        }}
      />
      <Appbar.Action
        icon="account-circle-outline"
        color="#F9A8D4"
        onPress={() => {alert("I'm Account")}}
      />
    </Appbar.Header>
  );
};

export default AppBar;
