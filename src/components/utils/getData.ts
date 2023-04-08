import { UserTaskEntity } from 'types';

interface objWithId{
    id:string
}

export const getData = async (obj:objWithId):Promise<UserTaskEntity> => {
  const res = await fetch('http://localhost:3021/getData', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),

  });
  const data = await res.json();
  return data;
};
