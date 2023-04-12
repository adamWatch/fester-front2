/* eslint-disable no-trailing-spaces */

import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserExpWorkout, Task } from 'types';
import { LogginContext } from '../Context/LogginContext';
import { ExpCard } from '../common/ExpCard/ExpCard';
import { SingleTask } from '../common/SingleTask/SingleTask';

import '../styles/categories.css';
import { Headers } from '../layout/Headers';
import { getData } from '../utils/getData';
import { EditTableItem } from '../common/EditTableItem/EditTable';

export function Workout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const [isAddTask, setIsAddTask] = useState(false);
  const handleAdd = () => {
    setIsAddTask(!isAddTask);
  };

  const [listTasksState, setListTasksState] = useState<Task[]>([]);
  const handleListTasksState = (newObj:Task) => {
    setListTasksState((listTasksState) => [...listTasksState, newObj]);
  };
  const handleDeleteItemList = (idToDelete:string) => {
    const listWithoutIdItem = listTasksState.filter((task) => !task.id.includes(idToDelete));
    setListTasksState(listWithoutIdItem);
  };
  const [task, setTask] = useState<Task>({
    id: '1',
    taskText: '',
    dificulty: '',
    exp: '10',
    routine: 'false',
    
  });
  const updateTask = (key:string, value:any) => {
    setTask((form) => ({
      ...form,
      [key]: value,
    }));
  };
 
  const [loggedIn, setLoggedIn] = useContext(LogginContext);
  /* wytestowane do odkomentowania
  useEffect(() => {
    if (loggedIn.isLog === false) {
      navigate('/');
    }
  }, [loggedIn.isLog]);
  */
  const [data, setData] = useState<UserExpWorkout>({
    id: '',
    allExp: 0,
    username: '',
    workoutExp: 0,
    workoutTask: '',
    idTasks: 0,
  });
  const updateData = (key:string, value:any) => {
    setData((form) => ({
      ...form,
      [key]: form.workoutExp + value,
    }));
  };
  const user = {
    id: loggedIn.idLog,
    typeCategory: 'workout',
  };

  useEffect(() => {
    (async () => {
      const userData = await getData(user);
      setIsLoading(false);
      setData(userData);
      const parseDataWorkout = JSON.parse(data.workoutTask);
      if (parseDataWorkout !== 'None') {
        await setListTasksState(parseDataWorkout);
      }
      
      const idTasks = String(data.idTasks);

      updateTask('id', idTasks);
    })();
  }, [isLoading]);

  if (isLoading === true) {
    return (
      <>
        <Headers />
        <h1>...Loading</h1>
      </>
    );
  }
  // sprawdzić czy to dizła musze pamietać aby odsyłać id kolejnych taskow
  if (JSON.parse(data.workoutTask) === 'None' && isEdit === false) {
    return (
      <>
        <Headers />
        <h1>You not have task to done</h1>
        <ExpCard category="Workout" userName={data.username} currExp={data.workoutExp} executedTask={121} />
        <div className="edit_container">
          <button type="button" onClick={handleEdit}>Edit</button>
        </div> 
      </>
    );
  }
  
  if (isAddTask === true) {
    const expValue = {
      stale: '20',
      easy: '40',
      moderate: '60',
      hard: '100',
      insane: '200',
    };
    const expValueRoutine = {
      stale: '2',
      easy: '4',
      moderate: '6',
      hard: '10',
      insane: '20',
    };
    
    const changeExp = () => {
      if (task.routine === 'false') {
        if (task.dificulty === 'stale') {
          setTask({ ...task, exp: expValue.stale });
        }
        if (task.dificulty === 'easy') {
          setTask({ ...task, exp: expValue.easy });
        }
        if (task.dificulty === 'moderate') {
          setTask({ ...task, exp: expValue.moderate });
        }
        if (task.dificulty === 'hard') {
          setTask({ ...task, exp: expValue.hard });
        }
        if (task.dificulty === 'insane') {
          setTask({ ...task, exp: expValue.insane });
        }
        console.log(task.dificulty);
      } else if (task.routine === 'true') {
        if (task.dificulty === 'stale') {
          setTask({ ...task, exp: expValueRoutine.stale });
        }
        if (task.dificulty === 'easy') {
          setTask({ ...task, exp: expValueRoutine.easy });
        }
        if (task.dificulty === 'moderate') {
          setTask({ ...task, exp: expValueRoutine.moderate });
        }
        if (task.dificulty === 'hard') {
          setTask({ ...task, exp: expValueRoutine.hard });
        }
        if (task.dificulty === 'insane') {
          setTask({ ...task, exp: expValueRoutine.insane });
        }
      }
    };
    const addTaskToAll = () => {
      handleListTasksState(task);
      const newId = String(Number(task.id) + 1);
      updateTask('id', newId);
      setIsAddTask(false); 
    }; 
    console.log(task);
    // Todo add exp logic
    
    return (
      <div className="add_task_container">

        <h2>Write your Task</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Dificulty</th>
              <th>Routine</th>

            </tr>
          </thead>
          <tbody>
            <tr id={task.id}>
              <td>
                <input type="text" name="taskText" value={task.taskText} onChange={(e) => updateTask('taskText', e.target.value)} />
              </td>
              <td>
                <select
                  name="dificulty"
                  id=""
                  value={task.dificulty}
                  onChange={(e) => {
                    updateTask('dificulty', e.target.value);
                  }}

                >
                  <option selected value="stale">Stale</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="hard">Hard</option>
                  <option value="insane">Insane</option>
                </select>
              </td>

              <td>
                <select name="routine" id="" value={task.routine} onChange={(e) => updateTask('routine', e.target.value)}>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </td>

            </tr>
            <tr>
              <td>
                Exp:
                {task.exp}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="edit_container">
          <button
            type="button"
            onClick={() => {
              changeExp();
              addTaskToAll();
            }}
          >
            Save
          </button>
        
          <button type="button" onClick={changeExp}>Count Exp</button>
          <button type="button" onClick={handleAdd}>Close Add</button>
        </div>
      </div>
    );
  }
  if (isEdit === true) {
    const handleSaveToServer = () => {
      (async () => {
        const res = await fetch('http://localhost:3021/addWorkoutData', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(listTasksState),
        });
        const data = await res.json();
        console.log(data);
      })();
      
      (async () => {
        const res = await fetch('http://localhost:3021/changeTaskId', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        const data = await res.json();
        console.log(data);
      })();
    };   
    console.log(listTasksState); 
    return (
      <>

        <h2 className="second_baner">Workout is good</h2>
        <div className="categories_container">
          <table className="task_table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Dificulty</th>
                <th>Exp</th>
                <th>Routine</th>
                <th>Tools</th>

              </tr>
            </thead>
            <tbody>
              {listTasksState.map((task) => <EditTableItem id={task.id} taskText={task.taskText} dificultySelect={task.dificulty} routineSelect={task.routine} exp={task.exp} delete={handleDeleteItemList} />)}

            </tbody>
          </table>

          <div className="edit_container">
            <button type="button" onClick={handleEdit}>Close Edit</button>
            <button type="button" onClick={handleAdd}>Add Task</button>
            <button type="button" onClick={handleSaveToServer}>Save all</button>
          </div>
        </div>
      </>
    );
  }
  
  const taskDone = (exp:string) => {
    const expIn = Number(exp);
    updateData('workoutExp', expIn);
    console.log('first');
  };
  
  return (
    
    <>
      <Headers />
      <h2 className="second_baner">Workout is good</h2>
      <div className="categories_container">
        <table className="task_table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Dificulty</th>
              <th>Exp</th>
              <th>Amount</th>
              <th>Done?</th>

            </tr>
          </thead>
          <tbody>
            {listTasksState.map((task) => <SingleTask id={task.id} taskText={task.taskText} dificultySelect={task.dificulty} routineSelect={task.routine} exp={task.exp} updateTask={taskDone} />)}
          </tbody>
        </table>
        {/* Do Sprawdzjącego projekt Czemu po zmianie propsa data.workoutExp nie renderuje się od nowa cały komponent ExpCard Ten bład sprawił że nie dokończyłem apki   */}
        <ExpCard category="Workout" userName={data.username} currExp={data.workoutExp} executedTask={121} />
        <div className="edit_container">
          <button type="button" onClick={handleEdit}> Edit</button>
          <button type="button">Save</button>
        </div>
      </div>
    </>
  );
}
