import { Route, Routes } from 'react-router-dom';

import { SignUp } from './pages/sign-up';
import { SignIn } from './pages/sign-in';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export { AppRoutes };
