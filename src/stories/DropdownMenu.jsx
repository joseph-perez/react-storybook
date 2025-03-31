import React, { useState } from 'react';

import './dropdown_menu.css';

const DropdownItem = (props) => {
	return (
		<div className="dropdown__menu-item">
			{props.children}
		</div>
	)
}

const DropdownMenu = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="dropdown-container">
			<div className="dropdown__chosen-title" onClick={() => setOpen(!open)}>{props.children}</div>
			{open ? (
				<div className="dropdown">
					{
						[1, 2, 3].map((item) => <DropdownItem>Menu item - {item}</DropdownItem>)
					}
				</div>
			) : null}
		</div>
	)
}

export default DropdownMenu;