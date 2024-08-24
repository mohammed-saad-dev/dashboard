import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;
const Button = styled.button`
  width: 249px;
  height: 55px;
  background-color: #636363;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 25px;
`;
const HomePage = () => {
  return (
    <Container>
      <Link to={"admin"}>
        <Button>ADMIN</Button>
      </Link>
      <Link to={"signin"}>
        <Button>LOG IN</Button>
      </Link>
      <Link to={"register"}>
        <Button>REGISTER</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
