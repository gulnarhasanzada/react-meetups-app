import {Route, Routes} from 'react-router-dom';

import FavoritesPage from './pages/Favorites';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  return (
    <div>
      <Layout>
          <Routes>
            <Route path='/' exact element={<AllMeetupsPage />} />
            <Route path='/new-meetup' element={<NewMeetupPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
