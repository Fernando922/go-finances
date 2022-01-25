import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>
      <TextInput
        value="Fernando"
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
      />
      <TextInput
        testID="input-surname"
        value="de Paula"
        placeholder="Sobrenome"
        autoCorrect={false}
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;
