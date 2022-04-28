import React from 'react';
import { 
    createNativeStackNavigator 
} from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen 
            name="UserIdentification"
            component={UserIdentification}
        />
        <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />
    </stackRoutes.Navigator>
);

export default AppRoutes;