import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Categories, categoryListState, IToDo, toDoState} from "../atoms";
import styled from "styled-components";


function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ] as IToDo[];
    });
  };
  const categoryList = useRecoilValue(categoryListState);


  return (
    <ToDoItemContainer>
      <span>{text}</span>
      <ButtonSection>
        {categoryList.map((c: Categories) => {
          return category !== c && (
            <button name={c} onClick={onClick}>
              {c}
            </button>
          )}
        )}
      </ButtonSection>

    </ToDoItemContainer>
  );
}

export default ToDo;

const ToDoItemContainer = styled.li`
  padding: 10px 0;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #777 1px solid;
`
const ButtonSection = styled.div`
  display: flex;
  gap: 6px;
  button {
    padding: 5px
  }
`