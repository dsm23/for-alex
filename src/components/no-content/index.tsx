import type { FunctionComponent, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const NoContentSVG: FunctionComponent<Props> = (props) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.6 352.114c-8.962 0-15.6-7.302-15.6-15.6 0-3.983 1.328-7.634 3.983-10.953l139.072-165.958c3.32-3.651 7.635-6.306 13.609-6.306 9.294 0 16.928 7.302 16.928 16.928v150.357H212.8c8.63 0 15.6 6.97 15.6 15.932 0 8.63-6.97 15.6-15.6 15.6h-29.208v77.336c0 9.294-7.302 17.26-16.928 17.26-9.294 0-17.26-7.634-17.26-17.26v-77.336H25.6zm123.804-143.387L55.472 320.25h93.932V208.727zM587.2 352.114c-8.962 0-15.6-7.302-15.6-15.6 0-3.983 1.328-7.634 3.983-10.953l139.072-165.958c3.319-3.651 7.634-6.306 13.609-6.306 9.294 0 16.927 7.302 16.927 16.928v150.357H774.4c8.63 0 15.6 6.97 15.6 15.932 0 8.63-6.97 15.6-15.6 15.6h-29.209v77.336c0 9.294-7.302 17.26-16.927 17.26-9.294 0-17.26-7.634-17.26-17.26v-77.336H587.2zm123.804-143.387L617.072 320.25h93.932V208.727z"
        fill="#2249B3"
      />
      <path
        d="M418.256 165.242s-39.166 54.766-8.298 67.047c31.201 12.281 39.167 22.902 32.86 36.843-6.306 13.94-26.885 28.544-8.962 34.519 17.924 5.974 19.583-62.068 37.507-49.124 17.923 12.945 56.757 37.507 54.766 2.324-1.992-35.183-79.992-83.975-79.992-83.975l-27.881-7.634zM275.532 313.617s25.226-40.825 54.102-36.842c28.877 3.983 57.422-40.826 63.728-31.864 6.638 8.961 4.979 31.864 9.957 46.8 4.979 14.604 25.226 25.225 20.579 36.178-4.979 10.622-81.983 43.481-73.685 52.443 8.298 8.962 49.787 5.643 49.787 20.579s-49.787 38.502-49.787 38.502l-61.404-72.026-13.277-53.77zm196.495 19.574s-26.221 22.903-26.221 31.2c0 8.298 5.974 0 16.263-4.978 10.29-4.979 29.541-19.583 19.915-22.902l-9.957-3.32zM354.196 208.723c-3.983 0-12.281 4.646-12.945 10.621-.663 5.643 13.941 5.311 8.962 15.268-4.979 9.957-10.621 18.919 3.983 15.932 14.604-3.319 18.919-12.281 16.264-20.579-2.324-7.966-7.302-20.91-16.264-21.242z"
        fill="#FF7373"
      />
      <path
        d="M253.957 300.003c0-82.315 64.391-147.702 146.042-147.702 81.652 0 146.043 65.055 146.043 147.702 0 82.315-64.391 147.702-146.043 147.702-81.651 0-146.042-65.387-146.042-147.702zm257.234 0c0-64.391-48.792-115.175-111.192-115.175-62.068 0-111.191 50.784-111.191 115.175 0 64.392 49.123 115.175 111.191 115.175 62.4 0 111.192-50.783 111.192-115.175z"
        fill="#B0C1E1"
      />
    </svg>
  );
};

export default NoContentSVG;