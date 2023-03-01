import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {Categories, categoryListState, categoryState, toDoSelector} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);

  return (
    <Container>
      <h1>To Dos</h1>
      <CategorySelector>
        {categoryList.map((category: Categories) => {
          return (
            <CategoryButton onClick={() => setCurrentCategory(category)} isSelected={category === currentCategory}>
              {category}
            </CategoryButton>
          )
        })}
        <NewCategory onClick={() => {
          const newCategory = prompt('추가할 카테고리 이름', '');
          setCategoryList(categoryList => [...categoryList, newCategory as Categories])
        }} >
          +
        </NewCategory>
      </CategorySelector>

      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;

const Container = styled.div`
  max-width: 500px; 
  margin: 20px auto;
`
const CategorySelector = styled.ul`
  display: flex;
  gap: 5px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
`
const CategoryButton = styled.li<{isSelected?: boolean}>`
  min-width: 70px;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  border: #777 solid ${(props) => props?.isSelected ? '1px' : '0'};
  border-radius: 200px;
`
const NewCategory = styled.li`
  text-align: center;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: #777 solid 1px;
  border-radius: 200px;
`