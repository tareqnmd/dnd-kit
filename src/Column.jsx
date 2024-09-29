import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import PropTypes from 'prop-types';
import Card from './Card';

const Column = ({ id, title, cards }) => {
	const { setNodeRef } = useDroppable({ id: id });
	return (
		<SortableContext
			id={id}
			items={cards}
			strategy={rectSortingStrategy}
		>
			<div
				ref={setNodeRef}
				style={{
					width: '160px',
					background: 'rgba(245,247,249,1.00)',
				}}
			>
				<p
					style={{
						padding: '6px 12px',
						color: '#575757',
						textAlign: 'center',
						fontWeight: 'bold',
					}}
				>
					{title}
				</p>
				{cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						title={card.title}
					></Card>
				))}
			</div>
		</SortableContext>
	);
};

Column.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Column;
