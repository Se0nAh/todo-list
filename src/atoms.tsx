import {atom, selector} from "recoil";


export enum Categories {
  "TO_DO" = "To do",
  "DOING" = "Doing",
  "DONE" = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryListState = atom<Categories[]>({
  key: "categoryList",
  default: [Categories.TO_DO, Categories.DOING, Categories.DONE],
})

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const currentCategory = get(categoryState);
    console.log(toDos, currentCategory)
    return toDos.filter((toDo) => toDo.category === currentCategory);
  },
});