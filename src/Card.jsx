import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';

const Card = ({ id, title }) => {
	const { attributes, listeners, setNodeRef, transform } = useSortable({
		id: id,
	});

	const style = {
		margin: '10px',
		opacity: 1,
		color: '#333',
		background: 'white',
		padding: '10px',
		transform: CSS.Transform.toString(transform),
		cursor: 'pointer',
		touchAction: 'none',
	};

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
		>
			<div id={id}>
				<p style={{ margin: '4px' }}>{title}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Card;
