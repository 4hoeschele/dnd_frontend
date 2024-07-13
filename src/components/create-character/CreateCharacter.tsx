import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import Utils from "../../utils/Utils.tsx";

const CreateCharacter = () => {
  const [character, setCharacter] = useState({
    //id: "",
    name: "",
    class: "",
    race: "",
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    wisdom: null,
    charisma: null,
  });

  useEffect(() => {
    console.log("character", character);
  }, [character]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]:
        name === "name" || name === "class" || name === "race"
          ? value
          : Number(value),
    }));
  };

  const postCharacter = async () => {
    const charWithUuid = { ...character, id: uuidv4() };
    await Utils.postCharacter(charWithUuid);
  };

  const isDisabled =
    character.name === "" ||
    character.class === "" ||
    character.race === "" ||
    character.strength === null ||
    character.dexterity === null ||
    character.constitution === null ||
    character.intelligence === null ||
    character.wisdom === null ||
    character.charisma === null;

  return (
    <div className="create-wrapper">
      <h1>Create Character</h1>
      <TextField
        id="character-name"
        name="name"
        label="Name"
        variant="outlined"
        value={character.name}
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel id="character-class">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="character-class"
          name="class"
          value={character.class}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value="Ranger">Ranger</MenuItem>
          <MenuItem value="Warlock">Warlock</MenuItem>
          <MenuItem value="Wizard">Wizard</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="character-race">Race</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="character-race"
          name="race"
          value={character.race}
          label="Race"
          onChange={handleChange}
        >
          <MenuItem value="Human">Human</MenuItem>
          <MenuItem value="Elf">Elf</MenuItem>
          <MenuItem value="Dwarf">Dwarf</MenuItem>
        </Select>
      </FormControl>
      <div className="stats-wrapper">
        <Typography variant="h5" gutterBottom>
          Stats
        </Typography>
        <TextField
          id="character-strength"
          name="strength"
          label="Strength"
          variant="outlined"
          value={character.strength}
          onChange={handleChange}
          type="number"
        />
        <TextField
          id="character-dexterity"
          name="dexterity"
          label="Dexterity"
          variant="outlined"
          value={character.dexterity}
          onChange={handleChange}
          type="number"
        />
        <TextField
          id="character-constitution"
          name="constitution"
          label="Constitution"
          variant="outlined"
          value={character.constitution}
          onChange={handleChange}
          type="number"
        />
        <TextField
          id="character-intelligence"
          name="intelligence"
          label="Intelligence"
          variant="outlined"
          value={character.intelligence}
          onChange={handleChange}
          type="number"
        />
        <TextField
          id="character-wisdom"
          name="wisdom"
          label="Wisdom"
          variant="outlined"
          value={character.wisdom}
          onChange={handleChange}
          type="number"
        />
        <TextField
          id="character-charisma"
          name="charisma"
          label="Charisma"
          variant="outlined"
          value={character.charisma}
          onChange={handleChange}
          type="number"
        />
      </div>
      <Button variant="contained" onClick={postCharacter} disabled={isDisabled}>
        Create Character
      </Button>
    </div>
  );
};

export default CreateCharacter;
