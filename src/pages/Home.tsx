import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Loader } from "../components/partials/Loader";
import { StyledButton } from "../components/Style/StyledButton";
import { FlexDiv } from "../components/Style/Wrappers";
import { IData } from "../models/IData";
import { set } from "../redux/features/DataSlice";
import { getList } from "../services/StorageService";

export const Home = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const LSdata = getList<IData>();
    if (LSdata.length === 0) {
      axios
        .get<IData[]>(
          "http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles"
        )
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        });
      dispatch(set(data));
    } else {
      setData(LSdata);
      setIsLoading(false);
    }
  }, []);

  return (
    <FlexDiv>
      <FlexDiv dir='column' width='70%' textAlign='left' align='left'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1>Home</h1>
            <FlexDiv>
              {data?.map((item) => {
                return (
                  <FlexDiv key={item._id}>
                    <FlexDiv dir='colum'>
                      <h2>{item.title}</h2>
                      <h6>{item.author}</h6>
                      <p>{item.description}</p>
                    </FlexDiv>
                  </FlexDiv>
                );
              })}
            </FlexDiv>
            <StyledButton>Klicka här</StyledButton>
          </>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};
