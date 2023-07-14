/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import COLORS from '../../constants/colors';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
// import {firebaseApp} from '../../config/firebase';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({email: ''});
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error: string | null, input: string) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };
  const forgotPassword = (Email: string) => {
    // const auth = firebaseApp.auth();
    // auth
    //   .sendPasswordResetEmail(Email)
    //   .then(() => {
    //    Alert.alert('reset email sent to ' + Email);
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });
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
            Réinitialiser mot de passe
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
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            error={errors.email}
            placeholder="Avez-vous un email de parrainage?"
            label=""
            iconName="email-open-outline"
          />
        </View>
        <View style={{paddingVertical: 45}}>
          <Button
            onPress={() => forgotPassword(inputs.email)}
            title="REINITIALISER MOT DE PASSE"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
