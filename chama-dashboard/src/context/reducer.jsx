export const reducer = (state, action) => {
  if (action.type === "GET_MEMBERS") {
    return {
      ...state,
      members: action.payload,
    };
  } else if (action.type === "GET_ADMINS") {
    return {
      ...state,
      admins: action.payload,
    };
  } else if (action.type === "OPEN_MODAL") {
    return {
      ...state,
      isModalOpen: true,
    };
  } else if (action.type === "OPEN_MESSAGE_MODAL") {
    return {
      ...state,
      isMessageModalOpen: true,
    };
  } else if (action.type === "OPEN_FUND_MODAL") {
    return {
      ...state,
      isFundModalOpen: true,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  } else if (action.type === "CLOSE_MESSAGE_MODAL") {
    return {
      ...state,
      isMessageModalOpen: false,
    };
  } else if (action.type === "CLOSE_FUND_MODAL") {
    return {
      ...state,
      isFundModalOpen: false,
    };
  } else if (action.type === "OPEN_SIDEBAR") {
    return {
      ...state,
      isSideBarOpen: true,
    };
  } else if (action.type === "CLOSE_SIDEBAR") {
    return {
      ...state,
      isSideBarOpen: false,
    };
  }
};
