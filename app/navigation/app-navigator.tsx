
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PetProfileScreen from '../screens/pet-profile-screen';
import SwipeAndMatchScreen from '../screens/swipe-and-match-screen';
import LocationScreen from '../screens/location-screen';
import InterestBasedMatchingScreen from '../screens/interest-based-matching-screen';
import PetParentProfileScreen from '../screens/pet-parent-profile-screen';
import ChatScreen from '../screens/chat-screen';
import PetShopDirectoryScreen from '../screens/pet-shop-directory-screen';
import ProductMarketplaceScreen from '../screens/product-marketplace-screen';
import ReviewsAndRatingsScreen from '../screens/reviews-and-ratings-screen';
import HospitalDirectoryScreen from '../screens/hospital-directory-screen';
import SymptomCheckerAndFirstAidScreen from '../screens/symptom-checker-and-first-aid-screen';
import AppointmentBookingScreen from '../screens/appointment-booking-screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PetProfile" component={PetProfileScreen} />
      <Stack.Screen name="SwipeAndMatch" component={SwipeAndMatchScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="InterestBasedMatching" component={InterestBasedMatchingScreen} />
      <Stack.Screen name="PetParentProfile" component={PetParentProfileScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="PetShopDirectory" component={PetShopDirectoryScreen} />
      <Stack.Screen name="ProductMarketplace" component={ProductMarketplaceScreen} />
      <Stack.Screen name="ReviewsAndRatings" component={ReviewsAndRatingsScreen} />
      <Stack.Screen name="HospitalDirectory" component={HospitalDirectoryScreen} />
      <Stack.Screen name="SymptomCheckerAndFirstAid" component={SymptomCheckerAndFirstAidScreen} />
      <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
