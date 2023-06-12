import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '90%',
        padding: 20,
        margin: 5
      },
      dataV: {
        backgroundColor: 'blue',
        padding: 15,
        width: '80%',
        height: '100%',
      },
      img: {
        width: '100%',
        height: '100%',
      },
      imgV: {
        backgroundColor: 'black',
        height: '100%',
        width: '40%',
        marginRight: 10,
        padding: 5,
      },
      nome: {
        marginBottom: 4,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
      },
      desc: {
        marginBottom: 5,
        fontSize: 15,
        color: 'white',
      },
      butt: {
        backgroundColor: 'white',
        padding: 10
      },
});

export default styles;