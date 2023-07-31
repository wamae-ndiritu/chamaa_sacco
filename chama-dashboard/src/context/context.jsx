import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "./reducer";
import { URL } from "../Url";

const ScrollContext = createContext();

const initialState = {
  item: {},
  isModalOpen: false,
  isMessageModalOpen: false,
  isFundModalOpen: false,
  members: [],
  admins: [],
  isSideBarOpen: false,
};

function ScrollProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const closeFundModal = () => {
    dispatch({ type: "CLOSE_FUND_MODAL" });
  };

  const openFundModal = () => {
    dispatch({ type: "OPEN_FUND_MODAL" });
  };

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const getMembers = () => {
    axios
      .get(`${URL}/api/members/`)
      .then(({ data }) => {
        dispatch({ type: "GET_MEMBERS", payload: data });
      })
      .catch((err) => console.log(err));
  };

  const getAdmins = () => {
    axios
      .get(`${URL}/api/members/admins`)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "GET_ADMINS", payload: data });
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const openMessageModal = () => {
    dispatch({ type: "OPEN_MESSAGE_MODAL" });
  };
  const closeMessageModal = () => {
    dispatch({ type: "CLOSE_MESSAGE_MODAL" });
  };

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        ...state,
        deviceWidth,
        closeModal,
        openModal,
        getMembers,
        getAdmins,
        openMessageModal,
        closeMessageModal,
        openFundModal,
        closeFundModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(ScrollContext);
};

export { ScrollProvider, useGlobalContext };
