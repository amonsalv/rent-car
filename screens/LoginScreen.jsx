import LoginScreen from "react-native-login-screen";
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from "react-native";
import { styles } from "../assets/styles/styles";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <LoginScreen
        logoImageSource={require("./assets/logo-example.png")}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={setUsername}
        onPasswordChange={setPassword}
        enablePasswordValidation
      />
      <LoginScreen
        logoImageSource={require("./assets/logo-example.png")}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={setUsername}
        loginButtonText={"Create an account"}
        disableSignup
        textInputChildren={
          <View style={{ marginTop: 16 }}>
            <TextInput
              placeholder="Re-Password"
              secureTextEntry
              onChangeText={setRepassword}
            />
          </View>
        }
        onPasswordChange={setPassword}
      />
    </View>
  );
}
