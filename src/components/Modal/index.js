import React from 'react';

const Modal = ({ currentPhoto, onClose }) => {
	const { name, category, description, index } = currentPhoto;
	return (
		<div data-testid="modal" className="modalBackdrop">
			<div className="modalContainer">
				<h3 className="modalTitle">{name}</h3>
				<img
					src={require(`../../assets/large/${category}/${index}.jpg`).default}
					alt={name}
				/>
				<p>{description}</p>
				<button onClick={onClose} type="button">
					Close this modal
				</button>
			</div>
		</div>
	);
};

export default Modal;