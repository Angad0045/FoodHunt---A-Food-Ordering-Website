import { useRouteError } from "react-router-dom";

const Error = () => {
  const ErrorDetail = useRouteError();
  console.log(ErrorDetail);
  return (
    <div>
      <h1>{ErrorDetail.status + ":" + ErrorDetail.statusText}</h1>;
      <h2>{ErrorDetail.data}</h2>
    </div>
  );
};

export default Error;
