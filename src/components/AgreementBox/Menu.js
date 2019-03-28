import React, { useState } from 'react'
//import styled from '@emotion/styled'
import Popover from '@material-ui/core/Popover'
import { Menu as MenuIcon } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useMenuToggle = () => {
	const [menuEl, setMenuState] = useState(null)

	const openMenu = event => {
		setMenuState(event.currentTarget)
	}

	const closeMenu = () => {
		setMenuState(null)
	}

	return { menuEl, openMenu, closeMenu }
}

export default () => {
	const { menuEl, openMenu, closeMenu } = useMenuToggle()
	const isMenuOpen = Boolean(menuEl)

	return (
		<>
			<IconButton
				aria-owns={isMenuOpen ? 'menu' : undefined}
				aria-haspopup="true"
				onClick={openMenu}
			>
				<MenuIcon />
			</IconButton>
			<Popover
				id="menu"
				open={isMenuOpen}
				onClose={closeMenu}
				anchorEl={menuEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
			>
				<List>
					<ListItem button>
						<ListItemText primary="Revoke adoption" />
					</ListItem>
					<ListItem button>
						<ListItemText primary="Other" />
					</ListItem>
				</List>
			</Popover>
		</>
	)
}
