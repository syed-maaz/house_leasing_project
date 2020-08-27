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
        <ContentRoute path="/" component={DashboardPage} />
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
        <ContentRoute
          path="/property/detail/:id"
          component={PropertyDetailPage}
        />
        <ContentRoute path="/property/edit/:id" component={PropertyEditPage} />
        <ContentRoute path="/property/view" component={PropertyViewPage} />
        <ContentRoute path="/properties" component={PropertyListPage} />

        <ContentRoute path="/user/new" component={NewUserDetailPage} />
        <ContentRoute
          path="/user/renter-profile"
          component={RenterProfilePage}
        />

        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" exact={true} component={ECommercePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
