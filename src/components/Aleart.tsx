import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AleartProps } from "./Interface/InterfaceCollection";

const Aleart = ({
  isAleart,
  setIsAleart,
  severity = "success",
  color = "info",
  title = "Success",
  normalText = "",
  strongText = "",
  timeOut = 3000,
}: AleartProps) => {
  if (isAleart == 1) {
    setTimeout(() => {
      setIsAleart(2);
    }, timeOut);
  }
  return (
    <>
      {isAleart != 0 && (
        <div
          className={`animate__animated ${
            isAleart == 1 ? "animate__bounceInLeft" : "animate__fadeOutLeft"
          } animate__bounceInLeft alert-box`}
        >
          <Alert
            onClose={() => {
              setIsAleart(2);
            }}
            severity={severity}
            color={color}
          >
            <AlertTitle>{title}</AlertTitle>
            {normalText} — <strong>{strongText}</strong>
          </Alert>
        </div>
      )}
    </>
  );
};

export default Aleart;
