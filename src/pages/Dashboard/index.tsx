import { Drawer } from '@alifd/next';
import * as React from 'react';

const Dashboard = () => {
  React.useEffect(() => {
    Drawer.show({ title: '!', content: '@' });
  }, []);
  return <div>123</div>;
};

export default Dashboard;
