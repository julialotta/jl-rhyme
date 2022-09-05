import { useState } from "react";
import { StyledButton } from "../components/Style/StyledButton";
import { FlexDiv } from "../components/Style/Wrappers";
import { INewData } from "../models/IData";

import { postItem } from "../services/handleCustomersFetch.service";
import { StyledLabel } from "./Style/TextElements";

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
        <StyledLabel>
          Title
          <input onChange={handleOnChange} type='text' name='title' />
        </StyledLabel>
        <StyledLabel>
          Description
          <input onChange={handleOnChange} type='text' name='description' />
        </StyledLabel>
        <StyledLabel>
          Author
          <input onChange={handleOnChange} type='text' name='author' />
        </StyledLabel>
        <StyledLabel>
          Body
          <input onChange={handleOnChange} type='text' name='body' />
        </StyledLabel>
      </FlexDiv>
      <StyledButton margin='10px' type='submit'>
        Spara
      </StyledButton>
    </form>
  );
};
