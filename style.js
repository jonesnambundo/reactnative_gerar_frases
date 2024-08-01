import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100
    },

    card: {
        backgroundColor: 'white',
        margin: 20,
        minHeight:150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    frase : {
        fontSize: 16,
        fontStyle: 'italic',
        color:'#1F1F1F',
        textAlign: 'center'
    },
    autor : {
        fontWeight: 'bold',
        marginTop: 14
    },

    button : {
        backgroundColor:'#4BEBE1',
        margin:20,
        padding:20,
        alignItems: 'center',
        borderRadius: 10
    }

})