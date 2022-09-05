import { useEffect, useState } from "react";
import { Loader } from "../components/partials/Loader";
import { FlexDiv } from "../components/Style/Wrappers";
import { IData, INewData } from "../models/IData";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledH5,
  StyledLabel,
  StyledLink,
  StyledP,
} from "../components/Style/TextElements";
import { StyledButton } from "../components/Style/StyledButton";
import {
  fetchItem,
  deleteItem,
  editItem,
} from "../services/handleCustomersFetch.service";

export const SingleItem = () => {
  const [item, setItem] = useState<IData>({
    _id: "",
    title: "",
    description: "",
    author: "",
    body: "",
  });
  const [newItem, setNewItem] = useState<INewData>({
    title: "",
    description: "",
    author: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [inEdit, setInEdit] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  let id = params.id || "";

  useEffect(() => {
    fetchItem(id)
      .then(async (d) => {
        setItem(d);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [inEdit]);

  const handleDeleteItem = () => {
    deleteItem(item._id)
      .then(async () => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));
  };

  const saveNewEditedItem = () => {
    setIsLoading(true);
    editItem(newItem, item._id)
      .then(async () => {
        fetchItem(id)
          .then(async (d) => {
            setItem(d);
            setInEdit(false);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FlexDiv dir='column'>
      <StyledLink to={"/"}>
        <StyledButton>Tillbaka</StyledButton>
      </StyledLink>
      <FlexDiv dir='column' width='70%' margin='30px 0 0 0'>
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {inEdit ? (
                <>
                  <form
                    onSubmit={() => {
                      saveNewEditedItem();
                    }}
                  >
                    <FlexDiv dir='column'>
                      <FlexDiv dir='column' gap='10px'>
                        <StyledLabel>
                          Title
                          <input
                            onChange={handleOnChange}
                            type='text'
                            name='title'
                            defaultValue={item.title}
                          />
                        </StyledLabel>
                        <StyledLabel>
                          Description
                          <input
                            onChange={handleOnChange}
                            type='text'
                            name='description'
                            defaultValue={item.description}
                          />
                        </StyledLabel>
                        <StyledLabel>
                          Author
                          <input
                            onChange={handleOnChange}
                            type='text'
                            name='author'
                            defaultValue={item.author}
                          />
                        </StyledLabel>
                        <StyledLabel>
                          Body
                          <input
                            onChange={handleOnChange}
                            type='text'
                            name='body'
                            defaultValue={item.body}
                          />
                        </StyledLabel>
                      </FlexDiv>
                      <StyledButton type='submit' margin='10px'>
                        Spara
                      </StyledButton>
                    </FlexDiv>
                  </form>
                </>
              ) : (
                <>
                  <FlexDiv dir='column' margin='10px'>
                    <StyledH5 fontSize='34px'>{item?.author}</StyledH5>
                    <StyledP>{item?.title}</StyledP>
                    <StyledP>{item?.body}</StyledP>
                    <StyledP>{item?.description}</StyledP>
                  </FlexDiv>
                  <FlexDiv gap='20px'>
                    <StyledButton onClick={() => setInEdit(true)}>
                      Edit
                    </StyledButton>
                    <StyledButton onClick={handleDeleteItem}>
                      Delete
                    </StyledButton>
                  </FlexDiv>
                </>
              )}
            </>
          )}
        </>
      </FlexDiv>
    </FlexDiv>
  );
};
