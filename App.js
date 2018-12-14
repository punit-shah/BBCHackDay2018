import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import ThoughtScreen from './screens/ThoughtScreen';
import ExperienceScreen from './screens/ExperienceScreen';

const EventScreens = createMaterialTopTabNavigator(
  {
    Thought: ThoughtScreen,
    Feed: FeedScreen,
    Experience: ExperienceScreen,
  },
  {
    initialRouteName: 'Feed',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: { display: 'none' },
    },
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Event: EventScreens,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  )
);
