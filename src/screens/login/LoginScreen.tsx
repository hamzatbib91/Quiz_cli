/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import COLORS from '../../constants/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
// import {MaterialIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonAccount from '../../components/ButtonAccount';
import auth from '@react-native-firebase/auth';
// import {firebaseApp} from '../../config/firebase';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [inputs, setInputs] = React.useState<Tlogin>({email: '', password: ''});
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  // const auth = firebaseApp.auth();

  const handleCheckboxToggle = () => {
    setChecked(!checked);
  };
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError({input: 'Please input email', error: 'email'});
      isValid = false;
    }
    if (!inputs.password) {
      handleError({input: 'Please input password', error: 'password'});
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };
  const login = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(inputs.email, inputs.password)
      .then(user => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) {
          navigation.replace('Layout');
          setLoading(false);

        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') 
        Alert.alert(error.message);
        else if (error.code === 'auth/user-not-found')
          Alert.alert('No User Found');
        else {
          Alert.alert('Please check your email id or password');
        }
        setLoading(false);

      });
    // setTimeout(async () => {
    //   setLoading(false);
    //   try {
    //     await auth.signInWithEmailAndPassword(inputs.email, inputs.password);
    //   } catch (error) {
    //     Alert.alert('Error', 'User does not exist');
    //   }
    // }, 3000);
  };
  const handleOnchange = ({text, input}: {text: string; input: any}) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = ({error, input}: {error: string; input: any}) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.whiteDark, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 25}}>Se connecter</Text>
        <View style={{marginVertical: 35}}>
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
              marginBottom: 10,
              marginTop: 10,
            }}>
            <View style={styles.beforeStyle} />
            <Text style={styles.textStyle}>OU</Text>
            <View style={styles.afterStyle} />
          </View>
          <Input
            onChangeText={text => handleOnchange({text: text, input: 'email'})}
            onFocus={() => handleError({input: null, error: 'email'})}
            error={errors.email}
            placeholder="Email addresses"
            label=""
            iconName="email-open-outline"
          />
          <Input
            onChangeText={text =>
              handleOnchange({text: text, input: 'password'})
            }
            onFocus={() => handleError({input: null, error: 'password'})}
            error={errors.password}
            placeholder="Mot de Passe"
            password
            label=""
            iconName="lock-outline"
          />
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleCheckboxToggle}>
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
              {checked && (
                // <MaterialIcons name="check" size={18} color={COLORS.black} />
                <Icon name="check" size={18} color={COLORS.black} />
              )}
            </View>
            <Text style={{fontSize: 13}}>Me connecter automatiquement</Text>
          </TouchableOpacity>
          <Button title="SE CONNECTER" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('resetPassword')}
            style={{
              color: COLORS.black,
              textAlign: 'center',
              textDecorationLine: 'underline',
              marginVertical: 20,
              fontSize: 13,
            }}>
            Mot de pass oublié?
          </Text>
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{
              color: COLORS.black,
              textAlign: 'center',
              marginVertical: 50,
              fontSize: 13,
            }}>
            Vous n'avez pas de compte ?
            <Text
              style={{
                color: 'green',

                textDecorationLine: 'underline',
                marginVertical: 50,
                fontSize: 13,
              }}
              onPress={() => navigation.navigate('RegistrationScreen')}>
              S'inscrire
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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

  checkboxContainer: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.white,
  },
});
