import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        title="Buddha"
        text="A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise."
      />
      <Card
        title="Thich Nhat Hanh"
        text="It is my conviction that there is no way to peace - peace is the way."
      />
      <Card
        title="Buddha"
        text="Radiate boundless love towards the entire world."
      />
      <Card title="Dogen" text="Forgetting oneself is opening oneself." />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
