import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Beer from '~/pages/Beer';

const Routes = createAppContainer(createSwitchNavigator({ Beer }));

export default Routes;
