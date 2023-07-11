// root
import { withRequiredAuthInfo, useRedirectFunctions, useLogoutFunction } from "@propelauth/react";

// component
import Profile from "../../components/profile";

function Auth(props) {
  const logoutFunction = useLogoutFunction();
  const { redirectToAccountPage } = useRedirectFunctions();

  if (props.isLoggedIn) {
    return (
      <>
        <Profile
          props={props}
          logoutFunction={logoutFunction}
          redirectToAccountPage={redirectToAccountPage}
        />
      </>
    );
  }
}

export default withRequiredAuthInfo(Auth);
