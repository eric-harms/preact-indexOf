import { h } from 'preact';

const IndexOf = (props) => (
	<span>
		{props.children[props.index]}
	</span>
);

IndexOf.defaultProps = {
	index: 0
}

export default IndexOf;