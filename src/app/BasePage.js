import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { PaymentsList } from "./modules/payments/PaymentsListPage";
import { PaymentDetailPage } from "./modules/payments/PaymentDetailPage";
import { PaymentTransactionsPage } from "./modules/payments/PaymentTransactionsPage";
import { MaintenanceList } from "./modules/maintenance/MaintenanceListPage";
import { NewMaintenance } from "./modules/maintenance/NewMaintaenancePage";
import { MaintenanceDetail } from "./modules/maintenance/MaintenanceDetailPage";
import { ApplicantListPages } from "./modules/applicants/ApplicatantListPage";
import { PropertyDetailPage } from "./modules/Properties/propertyDetailPage";
import { PropertyListPage } from "./modules/Properties/propertyListPage";
import { PropertyCreatePage } from "./modules/Properties/propertyCreatePage";
import { PropertyEditPage } from "./modules/Properties/propertyEditPage";
import { PropertyViewPage } from "./modules/Properties/propertyViewPage";
import { NewUserDetailPage } from "./modules/users/newUserDetailPage";
import { RenterProfilePage } from "./modules/users/renterProfilePage";
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
        <ContentRoute exact path="/" component={DashboardPage} />
        <ContentRoute exact path="/payments" component={PaymentsList} />
        <ContentRoute
          exact
          path="/payment/detail"
          component={PaymentDetailPage}
        />
        <ContentRoute
          exact
          path="/payment/transactions"
          component={PaymentTransactionsPage}
        />

        <ContentRoute
          exact
          path="/maintenance/new"
          component={NewMaintenance}
        />
        <ContentRoute
          exact
          path="/maintenance/detail/:id"
          component={MaintenanceDetail}
        />
        <ContentRoute exact path="/maintenance" component={MaintenanceList} />

        <ContentRoute exact path="/applicants" component={ApplicantListPages} />

        <ContentRoute
          exact
          path="/property/new"
          component={PropertyCreatePage}
        />
        <ContentRoute
          exact
          path="/property/detail/:id"
          component={PropertyDetailPage}
        />
        <ContentRoute
          exact
          path="/property/edit/:id"
          component={PropertyEditPage}
        />
        <ContentRoute
          exact
          path="/property/view"
          component={PropertyViewPage}
        />
        <ContentRoute exact path="/properties" component={PropertyListPage} />

        <ContentRoute exact path="/user/new" component={NewUserDetailPage} />
        <ContentRoute
          exact
          path="/user/renter-profile"
          component={RenterProfilePage}
        />

        <ContentRoute exact path="/builder" component={BuilderPage} />
        <ContentRoute exact path="/my-page" component={MyPage} />
        <Route exact path="/google-material" component={GoogleMaterialPage} />
        <Route exact path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route
          exact
          path="/e-commerce"
          exact={true}
          component={ECommercePage}
        />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
