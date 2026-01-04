
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PetProfileScreen from '../../app/screens/pet-profile-screen';
import SwipeAndMatchScreen from '../../app/screens/swipe-and-match-screen';
import LocationScreen from '../../app/screens/location-screen';
import InterestBasedMatchingScreen from '../../app/screens/interest-based-matching-screen';
import PetParentProfileScreen from '../../app/screens/pet-parent-profile-screen';
import ChatScreen from '../../app/screens/chat-screen';
import PetShopDirectoryScreen from '../../app/screens/pet-shop-directory-screen';
import ProductMarketplaceScreen from '../../app/screens/product-marketplace-screen';
import ReviewsAndRatingsScreen from '../../app/screens/reviews-and-ratings-screen';
import HospitalDirectoryScreen from '../../app/screens/hospital-directory-screen';
import SymptomCheckerAndFirstAidScreen from '../../app/screens/symptom-checker-and-first-aid-screen';
import AppointmentBookingScreen from '../../app/screens/appointment-booking-screen';

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

