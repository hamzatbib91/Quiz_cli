/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import COLORS from '../../constants/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import ButtonAccount from '../../components/ButtonAccount';
import auth from "@react-native-firebase/auth";
// import 'firebase/auth';
// import {firebaseApp, registerFirestore} from '../../config/firebase';

export default function RegistrationScreen({navigation}: {navigation: any}) {
  const [inputs, setInputs] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    code: '',
    password: '',
  });
  // const auth = firebaseApp.auth();

  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const validate = () => {
    //
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.nom) {
      handleError('Please input fullname', 'nom');
      isValid = false;
    }
    if (!inputs.prenom) {
      handleError('Please input fullname', 'prenom');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();

    }

    //-------------------------------
  };
  const register=()=>{
    setLoading(true);
    auth()
    .createUserWithEmailAndPassword(
      inputs.email,
      inputs.password,
    )
    .then((user) => {
      console.log(
        "Registration Successful. Please Login to proceed"
      );
      console.log(user);
      if (user) {
        auth().currentUser?.updateProfile({
            displayName:inputs.nom+" "+inputs.prenom,
            
            // photoURL:"https://aboutreact.com/profile.png",
          })
          .then(() => navigation.replace("Layout"))
          .catch((error) => {
            Alert.alert(error);
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.code == 'auth/email-already-in-use') {
                Alert.alert('The email address is already in use');
              } else if (error.code == 'auth/invalid-email') {
                Alert.alert('The email address is not valid.');
              } else if (error.code == 'auth/operation-not-allowed') {
                Alert.alert('Operation not allowed.');
              } else if (error.code == 'auth/weak-password') {
                Alert.alert('The password is too weak.');
              }
              setLoading(false);
    });
};
  
 

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error: string | null, input: string) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };



  return (
    <SafeAreaView style={{backgroundColor: COLORS.whiteDark, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 25}}>S'inscrire</Text>

        <View style={{marginVertical: 15}}>
          <ButtonAccount
            bg={COLORS.black}
            textColor={COLORS.white}
            colorIcon={COLORS.white}
            iconName="apple"
            title="S'inscrire avec Apple"
            onPress={validate}
          />

          <ButtonAccount
            isImg={true}
            bg={COLORS.white}
            textColor={COLORS.black}
            colorIcon={COLORS.black}
            iconName="google"
            title="S'inscrire avec Google"
            onPress={validate}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 10,
            }}>
            <View style={styles.beforeStyle} />
            <Text style={styles.textStyle}>OU</Text>
            <View style={styles.afterStyle} />
          </View>

          <Input
            onChangeText={(text: any) => handleOnchange(text, 'nom')}
            onFocus={() => handleError(null, 'nom')}
            error={errors.nom}
            placeholder="Nom utilisateur"
            label=""
            iconName="account-outline"
          />
          <Input
            onChangeText={text => handleOnchange(text, 'prenom')}
            onFocus={() => handleError(null, 'prenom')}
            error={errors.prenom}
            placeholder="Prénom utilisateur"
            label=""
            iconName="account-outline"
          />
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            error={errors.email}
            placeholder="Email addresses"
            label=""
            iconName="email-open-outline"
          />
          <Input
            onChangeText={text => handleOnchange(text, 'code')}
            onFocus={() => handleError(null, 'code')}
            error={errors.code}
            placeholder="Avez-vous un code de parrainage?"
            label=""
            iconName="email-open-outline"
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            error={errors.password}
            placeholder="Mot de Passe"
            password={true}
            label=""
            iconName="lock-outline"
          />
          <Button title="INSCRIRE" onPress={validate} />
          <View>
            <Text
              style={{
                color: COLORS.black,

                marginVertical: 15,
                textAlign: 'center',
                fontSize: 14,
              }}>
              Vous avez déja un compte ?
              <Text
                style={{
                  color: COLORS.GreenButton,
                  textDecorationLine: 'underline',
                }}
                onPress={() => navigation.navigate('LoginScreen')}>
                Se connecter
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  beforeStyle: {
    width: '39%',
    height: 1,
    backgroundColor: COLORS.greyLight,
  },
  afterStyle: {
    width: '39%',
    height: 1,
    backgroundColor: COLORS.greyLight,
  },
  textStyle: {
    width: '20%',
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.grey,
  },
});


