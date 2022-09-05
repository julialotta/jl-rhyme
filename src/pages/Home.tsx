import { useEffect, useState } from "react";
import { Loader } from "../components/partials/Loader";
import { FlexDiv } from "../components/Style/Wrappers";
import { IData } from "../models/IData";
import {
  StyledH5,
  StyledLink,
  StyledP,
} from "../components/Style/TextElements";
import { fetchData } from "../services/handleCustomersFetch.service";
import { ItemInput } from "../components/ItemInput";

export const Home = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(async (d) => {
        setData(d);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FlexDiv>
      <FlexDiv dir='column' width='70%'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ItemInput />
            <FlexDiv dir='column' textJustify='left' width='90%'>
              {data?.map((item) => {
                return (
                  <StyledLink to={"articles/" + item._id} key={item._id}>
                    <FlexDiv dir='column' margin='10px 0' width='100%'>
                      <StyledH5>Title: {item.title}</StyledH5>
                      <StyledP>Author: {item.author}</StyledP>
                      <StyledP>Description: {item.description}</StyledP>
                    </FlexDiv>
                  </StyledLink>
                );
              })}
            </FlexDiv>
          </>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};
