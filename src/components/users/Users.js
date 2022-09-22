import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/spinners';
import PropTypes from 'prop-types';

function Users(props) {
	if (props.loading) {
		return Spinner;
	} else {
		return (
			<div style={userStyle}>
				{props.users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4 1fr)',
	gridGap: '1 rem',
};

export default Users;
