import { Notice, UserEntity } from 'types';

export function validationForm(type:string, obj:UserEntity):Notice {
  const noticeObj:Notice = {
    isVisible: true,
    noticeText: '',
    noticeColor: 'green',
  };
  if (type === 'register') {
    if (obj.email.length === 0 || obj.email.length > 100) {
      noticeObj.noticeText = 'Your email is too small or big than 100 char';

      return noticeObj;
    }
  }
  if (obj.username.length === 0 || obj.email.length > 50) {
    noticeObj.noticeText = 'Your username is blank or big than 50 char';

    return noticeObj;
  }
  if (obj.password.length === 0 || obj.password.length > 50) {
    noticeObj.noticeText = 'Your password is blank or big than 50 char';

    return noticeObj;
  }
  if (obj.password.length < 8) {
    noticeObj.noticeText = 'Your password must have at least 8 char';

    return noticeObj;
  }

  return noticeObj;
}
