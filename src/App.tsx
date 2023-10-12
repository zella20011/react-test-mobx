import React, { FC, useEffect } from 'react';

//state
import Users from './store/users'
import { observer } from 'mobx-react-lite';
import { UserBlock } from './components';

const App: FC = observer(() => {
  

  return (
    <div className="App">
      {Users.usersList.map(user => <UserBlock key={user.id} data={user} />)}
    </div>
  );
})

export default App;
