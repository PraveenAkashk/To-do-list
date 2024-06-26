import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../stylesheets/Todo.scss";
import { useState } from "react";

let Todo = () => {
  let [inputvalue, setinputvalue] = useState("");
  let [todolists, settodolists] = useState([]);
  let [isEdit, setisEdit] = useState(false);
  let [editIndex, seteditIndex] = useState(null);
  let [updatevalue, setupdatevalue] = useState("");
  let [hasError, sethasError] = useState(false);

  let changehandler = (event) => {
    setinputvalue(event.target.value);
  };

  let onFromsubmit = (event) => {
    event.preventDefault();
    console.log("Click", inputvalue);
    if (inputvalue !== "") {
      settodolists((prev) => [...prev, inputvalue]);
      setinputvalue("");
      sethasError(false);
    } else {
      sethasError(true);
    }
  };

  let deletehandler = (index) => {
    let datafilter = todolists.filter((value, indexvalue) => {
      return indexvalue !== index;
    });
    settodolists(datafilter);
  };

  let edithandler = (index) => {
    console.log(index);
    setisEdit(true);
    seteditIndex(index);
  };

  let updatehandler = (event) => {
    setupdatevalue(event.target.value);
  };

  let Onupddatevalue = () => {
    setupdatevalue("");
    let existingList = [...todolists];
    existingList[editIndex] = updatevalue;
    settodolists(existingList);
    setisEdit(false);
  };

  console.log(todolists);

  return (
    <div className="todo-main">
      <Container>
        <div className="todo-wrap">
          <h2 className="title">Todo List</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Task"
                value={inputvalue}
                onChange={changehandler}
              />
            </Form.Group>
          </Form>
          {hasError ? <div className="error-text">Enter valid data</div> : null}
          <Button variant="dark" onClick={onFromsubmit}>
            ADD
          </Button>
          <div className="list-main">
            {todolists.length === 0 ? (
              <div className="no-data">
                <h2>No data</h2>
              </div>
            ) : (
              <div className="list-wrap">
                {todolists.map((value, index) => {
                  return (
                    <div key={index}>
                      {isEdit && editIndex === index ? (
                        <div className="edit-wrap">
                          <input
                            type="text"
                            value={updatevalue}
                            onChange={updatehandler}
                          />
                          <Button variant="dark" onClick={Onupddatevalue}>
                            SAVE
                          </Button>
                        </div>
                      ) : (
                        <div className="list">
                          <span>{value}</span>
                          <div className="button-wrap">
                            <Button
                              variant="dark"
                              onClick={() => {
                                deletehandler(index);
                              }}
                            >
                              DELETE
                            </Button>
                            <Button
                              variant="dark"
                              onClick={() => {
                                edithandler(index);
                              }}
                            >
                              EDIT
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Todo;
