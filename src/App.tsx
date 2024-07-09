import { Route, Routes } from 'react-router-dom';

import {
  EDIT_MEMBER_INFO,
  EMAIL_CHANGE_VALIDATION_PATH,
  HOME_PATH,
  PASSWORD_SETTINGS_PATH,
  PROFILE_PATH,
  PUBLIC_PROFILE_PATH,
  SETTINGS_PATH,
  STORAGE_PATH,
} from './config/paths';
import EditMemberPersonalInformation from './pages/EditMemberPersonalInformation';
import EditPublicProfileScreen from './pages/EditPublicProfileScreen';
import EmailChangeValidationScreen from './pages/EmailChangeValidationScreen';
import HomePage from './pages/HomePage';
import MemberProfileScreen from './pages/MemberProfileScreen';
import PageWrapper from './pages/PageWrapper';
import PasswordSettingsScreen from './pages/PasswordSettingsScreen';
import RequireAuthentication from './pages/RequireAuthentication';
import SettingsScreen from './pages/SettingsScreen';
import StorageScreen from './pages/StorageScreen';

export const App = (): JSX.Element => (
  <Routes>
    <Route
      path={EMAIL_CHANGE_VALIDATION_PATH}
      element={<EmailChangeValidationScreen />}
    />
    <Route element={<RequireAuthentication />}>
      <Route element={<PageWrapper />}>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={PROFILE_PATH} element={<MemberProfileScreen />} />
        <Route
          path={EDIT_MEMBER_INFO}
          element={<EditMemberPersonalInformation />}
        />
        <Route
          path={PUBLIC_PROFILE_PATH}
          element={<EditPublicProfileScreen />}
        />
        <Route
          path={PASSWORD_SETTINGS_PATH}
          element={<PasswordSettingsScreen />}
        />
        <Route path={STORAGE_PATH} element={<StorageScreen />} />
        <Route path={SETTINGS_PATH} element={<SettingsScreen />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
