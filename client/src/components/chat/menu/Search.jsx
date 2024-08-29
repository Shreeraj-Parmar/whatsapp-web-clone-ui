import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  padding: 5px;
  height: 40px;
  margin-top: 6px;
`;

const Wrapper = styled(Box)`
  background: #dcdcdc;
  display: flex;
  border-radius: 5px;

  align-items: center;
`;

const SearchIconStyle = styled(Box)`
  margin-top: 5px;
  margin-left: 5px;
`;

const InputStyle = styled(Box)`
  margin-left: 10px;
  width: 100%;
`;
const InputBaseStyle = styled(InputBase)`
  width: 100%;
`;

const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <SearchIconStyle>
          <SearchIcon />
        </SearchIconStyle>
        <InputStyle>
          <InputBaseStyle
            placeholder="search chat or message"
            onChange={(e) => setText(e.target.value)}
          />
        </InputStyle>
      </Wrapper>
    </Component>
  );
};

export default Search;
