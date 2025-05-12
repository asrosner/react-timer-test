import React from 'react';
import './style.css'; // Import CSS for styling

const Banner = ({ message }: { message: string }) => {
    return (
		<div className="banner">
		  {message}
		</div>
    );
};

export default Banner;