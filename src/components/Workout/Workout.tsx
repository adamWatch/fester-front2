/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserExpWorkout } from 'types';
import { LogginContext } from '../Context/LogginContext';
import { ExpCard } from '../common/ExpCard/ExpCard';
import { SingleTask } from '../common/SingleTask/SingleTask';

import '../styles/categories.css';
import { Headers } from '../layout/Headers';
import { getData } from '../utils/getData';

export function Workout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  /* @ts-ignore */
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
  });
  const user = {
    id: 'e3d8e9ba-6a4e-4826-bedf-6297dd6be313',
    typeCategory: 'workout',
  };

  useEffect(() => {
    (async () => {
      const userData = await getData(user);
      console.log(userData);
      setIsLoading(false);
      setData(userData);
    })();
  }, []);

  console.log(data);

  if (isLoading === true) {
    return (
      <>
        <Headers />
        <h1>...Loading</h1>
      </>
    );
  }
  /* działa do od komentowania
  if (JSON.parse(data.workoutTask) === 'None') {
    return (
      <>
        <Headers />
        <h1>You not have task to done</h1>
        <ExpCard currLvl={4} category="Workout" userName={data.username} currExp={data.workoutExp} expToLvl={500} executedTask={121} /> 
      </>
    );
  }
  */

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
              <th>Done</th>
              <th>Amount</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <SingleTask text="push-up and two hang upppppppppppppppppppppppppp" />
              <td />
              <td />
              <td>BTN</td>
              <input className="amount" type="number" required />

            </tr>
            <tr>
              <SingleTask text="push-up" />
              <td>Hard</td>
              <td>15</td>
              <td>BTN</td>

            </tr>
            <tr>
              <SingleTask text="push-up" />
              <td>Hard</td>
              <td>15</td>
              <td>BTN</td>

            </tr>
            <tr>
              <SingleTask text="push-up" />
              <td>Hard</td>
              <td>15</td>
              <td>BTN</td>

            </tr>
            <tr>
              <SingleTask text="push-up" />
              <td>Hard</td>
              <td>15</td>
              <td>BTN</td>

            </tr>
            <tr>
              <SingleTask text="push-up" />
              <td>Hard</td>
              <td>15</td>
              <td>BTN</td>

            </tr>
          </tbody>
        </table>

        <ExpCard category="Workout" userName={data.username} currExp={data.workoutExp} executedTask={121} />

      </div>
    </>
  );
}
