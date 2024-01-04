import React,{useState} from "react";
import { StyleSheet,View ,Button,Text,SafeAreaView } from "react-native";

const App = () =>{
  const [name , setName] = useState("Mehmet");
  const [age , setAge] = useState(29);
  const [isVisible , setIsVisible] = useState(true);

  return(
    <SafeAreaView style={styles.container}>
      <Button 
        title={isVisible ?  "Gizle" : "Goster"}
        onPress={() => setIsVisible(!isVisible)}
      />
      
      {isVisible && (
        <>
        <text> Isim:{name}</text>
        <text> Yas:{age}</text>
        <button title="Ismi Degistir" onPress={() => setName("Ahmet")}/>
        <button title="Yas Degistir" onPress={() => setAge(30)}/>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
  text:{
    fontSize:20,
  },
});