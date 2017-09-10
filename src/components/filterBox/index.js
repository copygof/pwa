import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { Card, CardText } from 'material-ui/Card';
import styles from './style';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
	// width: 100,
	padding: 10,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const FilterBox = ({  }) => (
	<div class={styles.filterBox}>
		<Paper style={style} zDepth={2} >
			<h1>Location</h1>
		</Paper>
		<Paper style={style} zDepth={2} >
			<h1>Food</h1>
		</Paper>
		<Paper style={style} zDepth={2} >
			<h1>Otop</h1>
		</Paper>
		<Paper style={style} zDepth={2} >
			<h1>etc.</h1>
		</Paper>
	</div>
	
)

export default FilterBox
