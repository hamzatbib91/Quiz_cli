type Tlogin = {
  email: string;
  password: string;
};
type Tregister = {
  name: string;
  prenom: string;
  email: string;
  password: string;
  subscription?: string;
};
type TSubscription = {
  name: string;
  price: number;
  points: number;
  gift: number;
  days: number;
  paymentMethod: "free"|"monthly"|"annual";
  discount: number;

};
type RootStackParamList = {
    LoginScreen: undefined;
    // Other screens in your navigation stack
  };
