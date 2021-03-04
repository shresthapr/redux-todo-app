import axios from "axios";

const storeUrl = "http://localhost:3001/noteslist";

const getAll = async () => {
  const resp = await axios.get(storeUrl);
  return resp.data;
};

const addNew = async (text) => {
  const newnote = { text, completed: false };
  const resp = await axios.post(storeUrl, newnote);
  return resp.data;
};

export default { getAll, addNew };
