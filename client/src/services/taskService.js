const baseUrl = "http://localhost:3030/jsonstore/movies";

const url =
  "https://todo-app-7ea63-default-rtdb.europe-west1.firebasedatabase.app/.json";
export const getAll = async () => {
  const response = await fetch(url);
  const result = await response.json();

  const finalResult = Object.values(result.tasks);
  const finalResultObject = Object.entries(result.tasks);
  let finalResultNew={}
  for(let i= 0; i<finalResultObject.length; i++){
    
   finalResultNew= {
      ...finalResult,
      id:finalResultObject[i][0]
    }
   
  }

  console.log(finalResultNew)

  return finalResult
};

export const getOne = async (taskId) => {
  const response = await fetch(
    `https://todo-app-7ea63-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`
  );
  const result = await response.json();
  console.log(result);
  return result;
};

export const CreateTask = async (objectTask) => {
  const response = await fetch(
    "https://todo-app-7ea63-default-rtdb.europe-west1.firebasedatabase.app/tasks/.json",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objectTask),
    }
  );
  const result = await response.json();
  return result;
};

export const updateTask = async (taskId, objectTask) => {
  const response = await fetch(
    `https://todo-app-7ea63-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objectTask),
    }
  );
  const result = response.json();
  return result;
};
