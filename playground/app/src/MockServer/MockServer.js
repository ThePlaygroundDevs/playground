import { setupWorker,rest } from "msw";
import { setupServer} from 'msw/node';

import * as features from '../features';

const getHandlers = ()=>{
    const handlers = [];
    for(let feature in features){
        if(features[feature]?.handlers){
            handlers.push(...features[feature].handlers);
        }
    }
    return handlers;
}

export const getWorker = ()=> setupWorker(...getHandlers())
export const getServer = ()=> setupServer(...getHandlers())
