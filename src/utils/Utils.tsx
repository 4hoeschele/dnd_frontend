import axios from "axios";

const getAllCharacters = async () => {
  const res = await axios.get("http://localhost:8080/characters");
  console.log("res", res);
};

const postCharacter = async (character: any) => {
  await axios.post("http://localhost:8080/characters", character);
};

const utils = {
  getAllCharacters,
  postCharacter,
};

export default utils;
