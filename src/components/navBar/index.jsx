import styled from "@emotion/styled"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"

function NavBar({ addClick = () => {}, settingsClick = () => {}, logoutClick  = () => {}}) {
  return (
    <NavBarContainer>
      <ButtonsContainer>
        <Button variant='contained' size="small" color="gray" onClick={addClick}>
          <AddIcon color="white"/>
        </Button>
        <Button variant='contained' size="small" color="gray" onClick={settingsClick}>
          <SettingsIcon color="white"/>
        </Button>
        <Button variant='contained' size="small" color="gray" onClick={logoutClick}>
          <LogoutIcon color="white"/>
        </Button>
      </ButtonsContainer>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

const ButtonsContainer = styled.div`
  height: 32px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default NavBar