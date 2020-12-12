/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-01
 * Description:
 *    Toolbar to display user avatar, coins remaining, and
 *    notifications icon button.
 */
import React, { FunctionComponent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import {
  Badge,
  IconButton,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Divider,
  // Switch,
  // FormControlLabel
} from "@material-ui/core";
import {
  AccountCircleTwoTone as AccountIcon,
  Notifications as NotificationsIcon,
  PowerSettingsNewTwoTone as SignOutIcon,
  HelpOutlineTwoTone as OnboardingIcon,
} from "@material-ui/icons";
import { useStyles } from "./UserToolBar.style";
import { useHistory } from "../../../../../hooks/useHistory";
import { signOutAsync } from "../../../../../features/authentication";
import {
  setOnboardingActive,
  setReload,
} from "../../../../../features/Onboarding/onboardingSlice";
import { UserRole } from "../../../../../services/serverApi";

import { CoinsContainer } from "./CoinsContainer";
import { AvatarButton } from "./AvatarButton";

interface OwnProps {}

type Props = OwnProps;

const UserToolBar: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  // const onboardingActive = useSelector((state: RootState) => state.onboarding.onboardingActive);
  const currentUserRole = useSelector(
    (state: RootState) => state.userAuth.role
  );

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prevOpen: boolean) => !prevOpen);
  };

  const handleUserMenuClose = (event: React.MouseEvent<EventTarget>) => {
    if (menuRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setUserMenuOpen(false);
  };

  const handleAccountMenuItemClick = (event: React.MouseEvent<EventTarget>) => {
    handleUserMenuClose(event);
    history.push("/my/account");
  };

  const handleLogOutMenuItemClick = (event: React.MouseEvent<EventTarget>) => {
    handleUserMenuClose(event);
    dispatch(signOutAsync());
  };

  const handleSwitchOnboarding = () => {
    dispatch(setOnboardingActive());
    dispatch(setReload());
  };

  return (
    <div className={classes.root}>
      {currentUserRole === UserRole.user ? (
        <IconButton color="inherit" onClick={handleSwitchOnboarding}>
          <OnboardingIcon />
        </IconButton>
      ) : (
        <></>
      )}

      <CoinsContainer />
      <IconButton color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <AvatarButton onClick={handleUserMenuToggle} menuRef={menuRef} />

      {/*User menu*/}
      <Popper
        open={isUserMenuOpen}
        anchorEl={menuRef.current}
        placement="bottom-end"
        role={undefined}
        disablePortal
      >
        <Paper>
          <ClickAwayListener onClickAway={handleUserMenuClose}>
            <MenuList autoFocusItem={isUserMenuOpen}>
              <div className={classes.marginBottom}>
                <MenuItem onClick={handleAccountMenuItemClick}>
                  <AccountIcon className={classes.menuItemIcon} />
                  Account
                </MenuItem>
              </div>
              <Divider className={classes.marginBottom} />
              <MenuItem onClick={handleLogOutMenuItemClick}>
                <SignOutIcon className={classes.menuItemIcon} />
                Log Out
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export { UserToolBar };
