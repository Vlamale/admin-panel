import { useLocation } from "react-router-dom";

interface ILocationState {
  from: Location;
}

const useTypedLocationState = (): ILocationState => {
  const location = useLocation();

  return location.state as ILocationState;
};

export default useTypedLocationState;
