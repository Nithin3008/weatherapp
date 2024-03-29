import Cellular from "./svgComponents/Cellular";
import Wifi from "./svgComponents/Wifi";
import Battery from "./svgComponents/Battery";
const TopBar = ({ color }) => {
  if (color === "black") {
    return (
      <div className="flex items-center justify-between h-[44px] w-[375px] m-auto">
        <p className="text-white">9:41</p>
        <div className="flex gap-2">
          <Cellular></Cellular>
          <Wifi></Wifi>
          <Battery></Battery>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between h-[44px] w-[375px] m-auto">
        <p className="">9:41</p>
        <div className="flex gap-2">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.6667 0.666666H15.6667C15.1144 0.666666 14.6667 1.11438 14.6667 1.66667V10.3333C14.6667 10.8856 15.1144 11.3333 15.6667 11.3333H16.6667C17.2189 11.3333 17.6667 10.8856 17.6667 10.3333V1.66667C17.6667 1.11438 17.2189 0.666666 16.6667 0.666666ZM11 3H12C12.5523 3 13 3.44771 13 4V10.3333C13 10.8856 12.5523 11.3333 12 11.3333H11C10.4477 11.3333 9.99999 10.8856 9.99999 10.3333V4C9.99999 3.44771 10.4477 3 11 3ZM7.33332 5.33333H6.33332C5.78104 5.33333 5.33332 5.78105 5.33332 6.33333V10.3333C5.33332 10.8856 5.78104 11.3333 6.33332 11.3333H7.33332C7.88561 11.3333 8.33332 10.8856 8.33332 10.3333V6.33333C8.33332 5.78105 7.88561 5.33333 7.33332 5.33333ZM2.66666 7.33333H1.66666C1.11437 7.33333 0.666656 7.78105 0.666656 8.33333V10.3333C0.666656 10.8856 1.11437 11.3333 1.66666 11.3333H2.66666C3.21894 11.3333 3.66666 10.8856 3.66666 10.3333V8.33333C3.66666 7.78105 3.21894 7.33333 2.66666 7.33333Z"
              fill="black"
            />
          </svg>
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.33033 2.608C10.5462 2.6081 12.6774 3.45954 14.2833 4.98633C14.4043 5.10421 14.5976 5.10272 14.7167 4.983L15.8727 3.81633C15.933 3.75561 15.9666 3.67336 15.9661 3.58778C15.9656 3.5022 15.931 3.42035 15.87 3.36033C11.6549 -0.679214 5.0051 -0.679214 0.789998 3.36033C0.728939 3.4203 0.694296 3.50213 0.693733 3.58771C0.69317 3.67329 0.726734 3.75557 0.786998 3.81633L1.94333 4.983C2.06236 5.1029 2.25581 5.10439 2.37666 4.98633C3.98282 3.45943 6.11422 2.608 8.33033 2.608ZM8.33033 6.40367C9.54782 6.40359 10.7219 6.85612 11.6243 7.67333C11.7464 7.78931 11.9387 7.7868 12.0577 7.66767L13.2123 6.501C13.2731 6.43981 13.3069 6.35679 13.306 6.27052C13.3051 6.18426 13.2697 6.10195 13.2077 6.042C10.4595 3.48562 6.20353 3.48562 3.45533 6.042C3.39325 6.10195 3.35784 6.1843 3.35702 6.27059C3.35621 6.35689 3.39006 6.43989 3.451 6.501L4.60533 7.66767C4.72432 7.7868 4.9166 7.78931 5.03866 7.67333C5.94054 6.85666 7.11365 6.40417 8.33033 6.40367ZM10.6433 8.95749C10.6451 9.04399 10.6111 9.12739 10.5493 9.188L8.552 11.2037C8.49345 11.2629 8.41362 11.2962 8.33033 11.2962C8.24704 11.2962 8.16722 11.2629 8.10866 11.2037L6.111 9.188C6.04929 9.12735 6.01534 9.04392 6.01717 8.95741C6.019 8.87091 6.05644 8.78899 6.12067 8.731C7.39624 7.65212 9.26443 7.65212 10.54 8.731C10.6042 8.78903 10.6416 8.87098 10.6433 8.95749Z"
              fill="black"
            />
          </svg>
          <svg
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.35"
              x="0.5"
              y="0.833334"
              width="21"
              height="10.3333"
              rx="2.16667"
              stroke="white"
            />
            <path
              opacity="0.4"
              d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4Z"
              fill="white"
            />
            <rect
              x="2"
              y="2.33333"
              width="18"
              height="7.33333"
              rx="1.33333"
              fill="black"
            />
          </svg>
        </div>
      </div>
    );
  }
};

export default TopBar;
