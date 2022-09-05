import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Loader } from "../components/partials/Loader";
import { StyledButton } from "../components/Style/StyledButton";
import { FlexDiv } from "../components/Style/Wrappers";
import { IData } from "../models/IData";
import { set } from "../redux/features/DataSlice";
import { getList } from "../services/StorageService";

export const SingleItem = () => {
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
            <h1>SingleItem</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              corrupti neque voluptate odio numquam dolores perferendis ad sint
              officia, nisi officiis iusto libero tempora earum fuga aliquam nam
              reprehenderit nemo?
            </p>
            <StyledButton>Klicka här</StyledButton>
          </>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};
