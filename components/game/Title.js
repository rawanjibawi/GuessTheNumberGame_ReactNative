import { Text, StyleSheet } from 'react-native';
export default Title = ({Children}) => {
  return(
    <Text style={style.title}>{Children}</Text>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});