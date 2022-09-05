import { useState } from "react";
import { StyledButton } from "../components/Style/StyledButton";
import { FlexDiv } from "../components/Style/Wrappers";
import { INewData } from "../models/IData";

import { postItem } from "../services/handleCustomersFetch.service";

export const ItemInput = () => {
  const [newItem, setNewItem] = useState<INewData>({
    title: "",
    description: "",
    author: "",
    body: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));
  };
  const saveNewItem = () => {
    postItem(newItem)
      .then(async () => {
        console.log("saved");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={() => {
        saveNewItem();
      }}
    >
      <FlexDiv dir='column' gap='10px'>
        <label>Title</label>
        <input onChange={handleOnChange} type='text' name='title' />
        <label>Description</label>
        <input onChange={handleOnChange} type='text' name='description' />
        <label>Author</label>
        <input onChange={handleOnChange} type='text' name='author' />
        <label>Body</label>
        <input onChange={handleOnChange} type='text' name='body' />
      </FlexDiv>
      <StyledButton margin='10px' type='submit'>
        Spara
      </StyledButton>
    </form>
  );
};
