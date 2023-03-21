import React from 'react';
import { ExpCard } from '../common/ExpCard/ExpCard';
import { SingleTask } from '../common/SingleTask/SingleTask';

import '../styles/categories.css';

export function Workout() {
  return (
    <div className="categories_container">
      <table className="task_table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Dificulty</th>
            <th>Exp</th>
            <th>Done</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <SingleTask text="push-up and two hang upppppppppppppppppppppppppp" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
          <tr>
            <SingleTask text="push-up" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
          <tr>
            <SingleTask text="push-up" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
          <tr>
            <SingleTask text="push-up" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
          <tr>
            <SingleTask text="push-up" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
          <tr>
            <SingleTask text="push-up" />
            <td>Hard</td>
            <td>15</td>
            <td>BTN</td>
            <td>BTN_Delete</td>
          </tr>
        </tbody>
      </table>

      <ExpCard currLvl={4} category="Workout" userName="Marek szklarzzzzz" currExp={100} expToLvl={500} executedTask={121} />

    </div>
  );
}
