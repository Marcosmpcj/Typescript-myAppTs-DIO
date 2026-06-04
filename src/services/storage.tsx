interface IDiobank {
  login: boolean;
}

const diobank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  const storage = localStorage.getItem("diobank");

  !storage && localStorage.setItem("diobank", JSON.stringify(diobank)); 
};

export const changeLocalStorage = (diobank: IDiobank):void => {
  localStorage.setItem("diobank", JSON.stringify(diobank));
};
