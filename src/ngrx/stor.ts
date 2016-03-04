import {Reducer, Action} from '@ngrx/store';

export const CHANGE = 'CHANGE';

export const stor: Reducer<string> = (state: string = new Date().toString(), 
            action: Action) => {

  switch (action.type) {
    case CHANGE:
      return new Date().toString();

    default:
      return state;
  }
};
