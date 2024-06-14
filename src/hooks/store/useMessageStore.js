import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../store";

export const useMessageStore = () => {
  const dispatch = useDispatch();

  const { messages, type } = useSelector((state) => state.message);

  const startSetMessages = (messages, type) => {
    dispatch(setMessages({ messages, type }));
  };

  const startClearMessages = () => {
    dispatch(setMessages({ messages: [], type: "" }));
  };

  return {
    //* Attributes
    messages,
    type,

    //* Methods
    startSetMessages,
    startClearMessages,
  };
};
