import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { PaymentsList } from "./pages/payments/PaymentsListPage";
import { PaymentDetailPage } from "./pages/payments/PaymentDetailPage";
import { PaymentTransactionsPage } from "./pages/payments/PaymentTransactionsPage";
import { MaintenanceList } from "./pages/maintenance/MaintenanceListPage";
import { NewMaintenance } from "./pages/maintenance/NewMaintaenancePage";
import { MaintenanceDetail } from "./pages/maintenance/MaintenanceDetailPage";
import { ApplicantListPages } from "./pages/applicants/ApplicatantListPage";
import { PropertyDetailPage } from "./pages/properties/propertyDetailPage";
import { PropertyListPage } from "./pages/properties/propertyListPage";
import { PropertyCreatePage } from "./pages/properties/propertyCreatePage";
import { PropertyEditPage } from "./pages/properties/propertyEditPage";
import { PropertyViewPage } from "./pages/properties/propertyViewPage";
import { NewUserDetailPage } from "./pages/users/newUserDetailPage";
import { RenterProfilePage } from "./pages/users/renterProfilePage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/payments" component={PaymentsList} />
        <ContentRoute path="/payment/detail" component={PaymentDetailPage} />
        <ContentRoute
          path="/payment/transactions"
          component={PaymentTransactionsPage}
        />

        <ContentRoute path="/maintenance/new" component={NewMaintenance} />
        <ContentRoute
          path="/maintenance/detail"
          component={MaintenanceDetail}
        />
        <ContentRoute path="/maintenance" component={MaintenanceList} />

        <ContentRoute path="/applicants" component={ApplicantListPages} />

        <ContentRoute path="/property/new" component={PropertyCreatePage} />
        <ContentRoute path="/property/detail" component={PropertyDetailPage} />
        <ContentRoute path="/property/edit" component={PropertyEditPage} />
        <ContentRoute path="/property/view" component={PropertyViewPage} />
        <ContentRoute path="/properties" component={PropertyListPage} />

        <ContentRoute path="/user/new" component={NewUserDetailPage} />
        <ContentRoute path="/user/renter-profile" component={RenterProfilePage} />

        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
