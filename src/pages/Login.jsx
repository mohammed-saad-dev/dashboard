import styled from "styled-components";
import { mobile } from "../responsive";
import { Link} from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;

`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const A = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;
const Wrapbutton = styled.div`
  
`
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Wrapbutton>
          <Button>LOGIN</Button>
          <A to={"/"}>
          <Button style={{marginLeft: "15px"}} >HOME</Button>
          </A>
          </Wrapbutton>
          
          <A to={"/register"} >CREATE A NEW ACCOUNT</A>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
