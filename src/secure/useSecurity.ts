import { useContext } from "react";
import SecurityContext from "./SecurityContext";

const useSecurity = () => useContext(SecurityContext);

export default useSecurity;
