import PropTypes from 'prop-types';

// const NavLatestIcon = ({ width = 24, height = 24, color = '#AAAAAA', ...props }) => {
//   return (
//     <svg width={width} height={height} viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//       <path
//         d="M5.5 21H10.5M11 14.3264C13.3649 13.2029 15 10.7924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V15C5 15.9319 5 16.3978 5.15224 16.7654C5.35523 17.2554 5.74458 17.6448 6.23463 17.8478C6.60218 18 7.06812 18 8 18C8.93188 18 9.39782 18 9.76537 17.8478C10.2554 17.6448 10.6448 17.2554 10.8478 16.7654C11 16.3978 11 15.9319 11 15V14.3264Z"
//         stroke={color}

const NavLatestIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...props}
    >
      <path
        d="M5.5 21H10.5M11 14.3264C13.3649 13.2029 15 10.7924 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V15C5 15.9319 5 16.3978 5.15224 16.7654C5.35523 17.2554 5.74458 17.6448 6.23463 17.8478C6.60218 18 7.06812 18 8 18C8.93188 18 9.39782 18 9.76537 17.8478C10.2554 17.6448 10.6448 17.2554 10.8478 16.7654C11 16.3978 11 15.9319 11 15V14.3264Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NavLatestIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default NavLatestIcon;
