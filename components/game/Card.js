import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
const Card = ({children}) => {
  return (
    <View style={style.inputContainer}>
        {children}
    </View>
  )
}

export default Card
StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    shadowColor: 'black',
    //create a shadow in react native
    //Android
    elevation: 4, // it takes values as 0, 1, 2, ... the higher the number the higher the shadow
    //in ios
    justifyContent: "center",
    alignItems: "center",
  },
});