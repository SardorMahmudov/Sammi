import { Icon, useColorModeValue } from "@chakra-ui/react";
import { IconProp } from "./icons.props";

const Announcement = ({ ...props }: IconProp): JSX.Element => {
  return (
    <Icon width="45" height="46" viewBox="0 0 45 46" fill="#020288" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_200_7124)">
        <path d="M35.9345 15.8983C35.4491 15.8983 35.0556 16.2917 35.0556 16.7772V34.7668L14.1495 28.901V19.6355L26.989 16.033C27.4563 15.9019 27.7289 15.4167 27.5978 14.9493C27.4667 14.482 26.9813 14.2094 26.5141 14.3405L13.1497 18.0903H2.99856C1.34517 18.0903 0 19.4354 0 21.0888V27.4477C0 29.1011 1.34517 30.4462 2.99856 30.4462H4.41668L5.55645 39.2279C5.70111 40.3427 6.34887 41.2172 7.33368 41.6273C9.48779 42.519 11.9849 40.8893 11.6179 38.4413L10.5803 30.4462H13.1496L35.697 36.7725C35.9599 36.8465 36.2459 36.7934 36.4655 36.6266C36.6847 36.4604 36.8134 36.2013 36.8134 35.9262V16.7772C36.8134 16.2917 36.4199 15.8983 35.9345 15.8983ZM1.75781 27.4477V21.0888C1.75781 20.4047 2.31442 19.8481 2.99856 19.8481H12.3917V28.6885H2.99856C2.31442 28.6884 1.75781 28.1318 1.75781 27.4477ZM9.87469 38.6676C9.94034 39.1732 9.80016 39.5623 9.458 39.8238C9.06715 40.1226 8.47143 40.1968 8.00938 40.0045C7.6028 39.8352 7.364 39.4979 7.29967 39.0017L6.18926 30.4462H8.80769L9.87469 38.6676Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.6159 3.32568H43.2061C44.1926 3.32568 44.9996 4.13305 44.9996 5.11918V15.8804C44.9996 16.8661 44.1918 17.6739 43.2061 17.6739H32.8933L31.0997 19.4675L29.3061 17.6739H26.6158C25.6298 17.6739 24.8223 16.8669 24.8223 15.8804V5.11918C24.8224 4.13278 25.6294 3.32568 26.6159 3.32568Z"
          fill="#E2C4FF"
        />
        <path d="M40.2927 7.79169H29.5316C28.3666 7.74844 28.3675 6.07668 29.5316 6.03387H40.2927C41.4576 6.07712 41.4567 7.74888 40.2927 7.79169Z" />
        <path d="M40.2927 11.3787H29.5316C28.3666 11.3354 28.3675 9.66365 29.5316 9.62085H40.2927C41.4576 9.66409 41.4567 11.3359 40.2927 11.3787Z" />
        <path d="M34.9121 14.9659H29.5315C28.3666 14.9226 28.3675 13.2509 29.5315 13.2081H34.9121C36.077 13.2513 36.0761 14.9231 34.9121 14.9659Z" />
      </g>
      <defs>
        <clipPath id="clip0_200_7124">
          <rect width="45" height="45" fill="white" transform="translate(0 0.0999756)" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default Announcement;
