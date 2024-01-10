import { Route, Routes } from 'react-router-dom';

import { SignUp } from './pages/sign-up';
import { SignIn } from './pages/sign-in';
import { Home } from './pages/home';
import { Feed } from './pages/feed';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export { AppRoutes };
