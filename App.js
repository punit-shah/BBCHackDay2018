import {
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import FeedScreen from './FeedScreen';
import ThoughtScreen from './ThoughtScreen';
import ExperienceScreen from './ExperienceScreen';

const EventSwitch = createMaterialTopTabNavigator(
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
  createSwitchNavigator(
    {
      Home: HomeScreen,
      Event: EventSwitch,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
