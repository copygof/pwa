import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Header = ({ title }) => (
	<AppBar
		title={title}
		iconElementLeft={
			<IconButton>
				<img
					src="../../assets/icons/icon.png"
					alt="icon"
					Style="height:30px;margin-left:-15px;margin-top:-3px"
				/>
			</IconButton>
		}
		iconElementRight={<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Bookmark" />
      <MenuItem primaryText="language" />
      <MenuItem primaryText="Help" />
    </IconMenu>}
		style={{
			backgroundColor: '#4a331e'
		}}
	/>
)
Header.defaultProps = {
	title: ''
}

export default Header

