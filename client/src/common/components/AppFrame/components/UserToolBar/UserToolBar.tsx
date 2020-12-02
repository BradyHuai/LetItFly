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
  Avatar,
  Badge,
  IconButton,
  Popper,
  Typography,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Divider,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import {
  AccountCircleTwoTone as AccountIcon,
  Notifications as NotificationsIcon,
  MonetizationOn as CoinIcon,
  PowerSettingsNewTwoTone as SignOutIcon,
} from "@material-ui/icons";
import { useStyles } from "./UserToolBar.style";
import { formatNumber } from "../../../../util";
import { useHistory } from "../../../../../hooks/useHistory";
import { signOutAsync } from "../../../../../features/authentication";
import { setOnboardingActive } from "../../../../../features/Onboarding/onboardingSlice";


interface OwnProps { }

type Props = OwnProps;

const UserToolBar: FunctionComponent<Props> = (props) => {
  const { avatarLink, coins } = useSelector(
    (state: RootState) => state.userAuth
  );
  const classes = useStyles();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuAnchorRef = useRef<HTMLButtonElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const onboardingActive = useSelector((state: RootState) => state.onboarding.onboardingActive);

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prevOpen: boolean) => !prevOpen);
  };

  const handleUserMenuClose = (event: React.MouseEvent<EventTarget>) => {
    if (userMenuAnchorRef.current?.contains(event.target as HTMLElement)) {
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
  };


  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={onboardingActive}
            onChange={handleSwitchOnboarding}
            name="Tour guide"
            color="secondary"
          />
        }
        label="New User Guide"
      />
      <div className={classes.coinsContainer}>
        <CoinIcon className={classes.coinIcon} />
        <Typography variant="subtitle1" className={classes.coinsLabel}>
          {formatNumber(coins!)}
        </Typography>
      </div>

      <IconButton color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        color="inherit"
        onClick={handleUserMenuToggle}
        ref={userMenuAnchorRef}
      >
        {avatarLink ? (
          <Avatar
            alt="avatar"
            src={avatarLink}
            className={classes.userProfileIcon}
          />
        ) : (
            <AccountIcon className={classes.userProfileIcon} />
          )}
      </IconButton>

      {/*User menu*/}
      <Popper
        open={isUserMenuOpen}
        anchorEl={userMenuAnchorRef.current}
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
