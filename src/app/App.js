/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function App({ store, persistor, basename }) {
  return (
    <AmplifyAuthenticator
      usernameAlias="email"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100vh",
      }}
    >
      {/* Provide Redux store */}
      <Provider store={store}>
        {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
        <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
          {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
          <React.Suspense fallback={<LayoutSplashScreen />}>
            {/* Override `basename` (e.g: `homepage` in `package.json`) */}
            <BrowserRouter basename={basename}>
              {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
              <MaterialThemeProvider>
                {/* Provide `react-intl` context synchronized with Redux state.  */}
                <I18nProvider>
                  {/* Render routes with provided `Layout`. */}
                  <Routes />
                </I18nProvider>
              </MaterialThemeProvider>
            </BrowserRouter>
          </React.Suspense>
        </PersistGate>
      </Provider>
    </AmplifyAuthenticator>
  );
}
