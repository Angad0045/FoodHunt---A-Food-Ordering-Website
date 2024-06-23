import { createContext } from "react";

const UserContext = createContext({
  user: {
    Name: "Dummy Name",
    Email: "dummyemail@gmail.com",
  },
});

export default UserContext;
