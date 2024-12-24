import { View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardAffilie from '../screens/affilie/dashbord/DashboardAffilie';
import ProgrammesAffilie from '../screens/affilie/Programe/ProgrammesAffilie';
import FacturationAffilie from '../screens/affilie/facturation/FacturationAffilie';
import SupportAffilie from '../screens/affilie/support/SupportAffilie';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo"
import logo from "../assets/logo.png"
import CustomDrawerContent from '../components/customDrawer/CustomDrawerContent';
import styles from './styles';

const Drawer = createDrawerNavigator();

export default function DrawerAffilie() {

  return (
    <Drawer.Navigator

      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerType:'back',
        headerStyle: {
          backgroundColor: 'white',
          borderRadius: 0, shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.6,
          shadowRadius: 5,
          elevation: 6
        },
        drawerActiveBackgroundColor: '#ebfcfb',
        drawerStyle: {
          width: '58%', borderRadius: 0, shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.6,
          shadowRadius: 5,
          elevation: 6
        },

        drawerItemStyle: { borderRadius: 5, marginBottom: 5 },
        headerTitleAlign: 'left',
        headerTitle: () => (
          <View style={styles.rowhead}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerTitle}>{route.name}</Text>
          </View>),
        headerRight: () => (
          <View style={styles.row}>
            <View style={styles.row}>
              <MaterialCommunityIcons size={18} name='database' />
            </View>
            <Image
              source={logo}
              style={styles.avatar}
            />
          </View>
        ),
      })}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Entypo
              name="grid"
              size={20}
            />
          ),
          drawerLabel: ({ focused }) => (
            <Text style={{ fontSize: 14 }}>
              Dashboard
            </Text>
          ),
        }}
        name="Dashboard"
        component={DashboardAffilie}
      />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="price-tag"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Programmes
          </Text>
        ),
      }}
        name="PROGRAMMES" component={ProgrammesAffilie} />
      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="images"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Supports
          </Text>
        ),
      }} name="SUPPORTS" component={SupportAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="traffic-cone"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Outils
          </Text>
        ),
      }} name="OUTILS" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="pie-chart"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Statisque
          </Text>
        ),
      }} name="STATISQUE" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="email"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Transaction
          </Text>
        ),
      }} name="TRANSACTION" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="wallet"
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ fontSize: 14 }}>
            Historique
          </Text>
        ),
      }} name="FACTURATION" component={FacturationAffilie} />
    </Drawer.Navigator>
  );
}