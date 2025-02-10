import PropTypes from 'prop-types';

const CreateAccountRightIcon = ({ width = 10, height = 18, color = '#aaa', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.735544 16.6035L7.65204 9.57604C7.80374 9.42271 7.88882 9.21573 7.88882 9.00004C7.88882 8.78435 7.80374 8.57737 7.65204 8.42404L0.737044 1.39654C0.585431 1.24226 0.500477 1.0346 0.500477 0.818291C0.500477 0.601981 0.585431 0.394324 0.737044 0.240041C0.81111 0.164068 0.899633 0.10369 0.997399 0.0624644C1.09516 0.0212388 1.20019 0 1.3063 0C1.4124 0 1.51742 0.0212388 1.61519 0.0624644C1.71295 0.10369 1.80148 0.164068 1.87554 0.240041L8.79054 7.26604C9.24493 7.72882 9.49951 8.35148 9.49951 9.00004C9.49951 9.64861 9.24493 10.2713 8.79054 10.734L1.87554 17.76C1.80146 17.8362 1.71284 17.8968 1.61493 17.9382C1.51703 17.9795 1.41183 18.0009 1.30554 18.0009C1.19926 18.0009 1.09406 17.9795 0.996155 17.9382C0.898251 17.8968 0.809633 17.8362 0.735544 17.76C0.58393 17.6058 0.498976 17.3981 0.498976 17.1818C0.498976 16.9655 0.58393 16.7578 0.735544 16.6035Z"
        fill={color}
      />
    </svg>
  );
};

CreateAccountRightIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default CreateAccountRightIcon;
