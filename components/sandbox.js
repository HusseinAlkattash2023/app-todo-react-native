import {StyleSheet , View , Text} from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10
    },
    boxTwo:{
        backgroundColor:'gold',
        padding:20
    },
    boxThree:{
        backgroundColor:'coral',
        padding:30
    },
    boxFour:{
        backgroundColor:'skyblue',
        padding:40
    }
})