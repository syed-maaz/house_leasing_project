/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import objectPath from "object-path";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import {UserProfileDropdown} from "./dropdowns/UserProfileDropdown";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export function QuickUserToggler() {
  const {user} = useSelector(state => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas: objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  return (<>
        {layoutProps.offcanvas && (<OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="quick-user-tooltip"></Tooltip>}
        >
          <div className="topbar-item">
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                 id="kt_quick_user_toggle">
              <>
                <AmplifySignOut />
              </>
            </div>
          </div>
        </OverlayTrigger>)}

        {!layoutProps.offcanvas && (<UserProfileDropdown/>)}
      </>
  );
}
