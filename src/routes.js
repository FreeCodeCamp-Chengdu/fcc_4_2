// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from 'containers/Main';
import TodoList from 'components/TodoList';

export function createRoutes() {
  const root = {
    path: '/',
    component: Main,
  };
  const todo = {
    path: '/todo',
    component: TodoList,
  };
  return {
    childRoutes: [root, todo],
  };
}
