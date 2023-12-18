import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    margin: 10,
    fontSize: 18,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: '#66a3ff',
    alignItems: 'center',
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card_button_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
