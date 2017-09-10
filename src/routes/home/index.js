import { h, Component } from 'preact';
import Header from '../../components/header';
import FilterBox from '../../components/filterBox';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div >
				<Header />
				<div class={style.home}>
					<FilterBox />
				</div>
			</div>	
		);
	}
}
