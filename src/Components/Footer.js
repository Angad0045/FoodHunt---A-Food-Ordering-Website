import { useContext } from "react";
import UserContext from "../UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="dark:bg-neutral-800 p-5">
      <h1 className=" text-center dark:text-white">
        This Website is Developed by {user.Name} - {user.Email}
      </h1>
    </div>
  );
};

export default Footer;
