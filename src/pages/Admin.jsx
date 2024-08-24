import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled as muiStyled } from "@mui/material/styles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Link } from "react-router-dom";
// variable styles

const CenterBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #ffffff;
  border: 2px solid #878787;
  border-radius: 8px;
`;
const Alert = styled.div`
  width: 300px;
  height: 30px;
  background: lightgray;
  font-size: 16px;
  color: gray;
  margin-top: 7px;
  margin-left: 40px;
  opacity: ${(props) => props.opacity || 0};
  transition: opacity 0.3s ease;
  padding-left: 10px;
  margin: auto;
  margin-top: 10px;
`;
const Tittle = styled.div`
  color: #878787;
  font-size: 35px;
`;
const WrapInput = styled(CenterBase)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  padding: 10px;
  width: 399px;
  margin: 40px;
  outline: none;
  border: 1px solid #ffd7b1;
  border-radius: 10px;
  text-align: center;
  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 20px;
  color: #878787;
`;
const AddButton = muiStyled(Button)`
padding: 13px;
`;
const WrapEployees = styled(CenterBase)`
  flex-direction: column;
  justify-content: space-between;
`;
const Employees = styled.div`
  background-color: lightgray;
  height: 80px;
  margin-bottom: 10px;
  width: 600px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;
const WrapButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
const Admin = () => {
  const [value, setValue] = useState("");
  const [alertOpacity, setAlertOpacity] = useState(0);

  const [employees, setEployees] = useState([]);

  //state function
  const handleInputChange = (event) => setValue(event.target.value);

  //button function
  function addHandle() {
    value.trim().length > 0 && setEployees([...employees, { theName: value }]);
    setValue("");
  }

  const handleEdit = (theName) => {
    if (value.trim().length === 0) {
      setAlertOpacity(1);
      setTimeout(() => setAlertOpacity(0), 10000);
      return;
    }

    setEployees(
      employees.map((item) =>
        item.theName === theName ? { ...item, theName: value } : item
      )
    );
    setValue("");
  };
  const handleDelete = (theName) => {
    setEployees(employees.filter((item) => item.theName !== theName));
  };
  // keyboard function
  const handleKeyPress = (event) => event.key === "Enter" && addHandle();

  return (
    <>
      <Link to={"/"}>
        <AddButton variant="contained" color="error">
          Sing out
        </AddButton>
      </Link>

      <Tittle>ADMIN DASHBOARD</Tittle>

      <Container>
        <Alert opacity={alertOpacity}>
          type in input and then click on edit button
        </Alert>
        <WrapInput>
          <Input
            onKeyDown={handleKeyPress}
            onChange={(e) => handleInputChange(e)}
            placeholder="add employees ..."
            value={value}
          />
          <AddButton onClick={addHandle} variant="contained" color="success">
            <AddIcon sx={{ fontSize: "30px" }} />
          </AddButton>
        </WrapInput>
        <WrapEployees>
          {employees.map(({ theName }, index) => (
            <Employees key={index}>
              {theName}
              <WrapButton>
                <AddButton
                  variant="outlined"
                  color="error"
                  sx={{ padding: "0px", width: "10px" }}
                  onClick={() => handleDelete(theName)}
                >
                  <DeleteOutlineOutlinedIcon />
                </AddButton>
                <AddButton
                  onClick={() => handleEdit(theName)}
                  variant="outlined"
                  sx={{ padding: "0px", width: "10px" }}
                >
                  <ModeEditOutlineOutlinedIcon />
                </AddButton>
              </WrapButton>
            </Employees>
          ))}
        </WrapEployees>
      </Container>
    </>
  );
};

export default Admin;
