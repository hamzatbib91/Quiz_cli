import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Keyboard} from 'react-native';
import COLORS from '../../constants/colors';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';

const NewPassword = ({navigation}: {navigation: any}) => {
  // const navigation=useNavigation()
  const [inputs, setInputs] = React.useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const handleOnchange = (text: string, input: string) => {
    setInputs((prevState: any) => ({...prevState, [input]: text}));
  };
  const handleError = (error: string | null, input: string) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };

  const validate = () => {
    //
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (inputs.password !== inputs.confirmPassword) {
      handleError('password must be matched', 'confirmPassword');
      isValid = false;
    }

    if (isValid) {
      changePassword();
    }

    //-------------------------------
  };
  const changePassword = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        navigation.navigate('LoginScreen');
      } catch (error) {
        //Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.whiteDark, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <View>
          <Text style={{color: COLORS.black, fontSize: 25}}>
            Nouveau mot de passe
          </Text>
          <Text
            style={{
              marginVertical: 30,
              fontSize: 16,
              color: COLORS.greyText,
              lineHeight: 26,
            }}>
            Enter votre email et nous vous enverrons un lien pour réinitialiser
            votre mot de passe
          </Text>
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            error={errors.password}
            placeholder="Mot de passe"
            password={true}
            label=""
            iconName="lock-outline"
          />
          <Input
            onChangeText={text => handleOnchange(text, 'confirmPassword')}
            onFocus={() => handleError(null, 'confirmPassword')}
            error={errors.confirmPassword}
            placeholder="Confirm mot de passe"
            password={true}
            label=""
            iconName="lock-outline"
          />
        </View>
        <View style={{paddingVertical: 45}}>
          <Button onPress={validate} title="REINITIALISER MOT DE PASSE" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;
