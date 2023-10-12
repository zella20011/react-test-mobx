import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

//state
import Users from './store/users'

// components
import { UserBlock, AddUser } from './components';

const App: FC = observer(() => {
  

  return (
    <div className="App">
      <div>
        {Users.usersList.map(user => <UserBlock key={user.id} data={user} />)}
      </div>
      <AddUser />
    </div>
  );
})

export default App;
