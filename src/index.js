import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';



const store = createStore(appReducer);

const unsubsribeGoalLogger = store.subscribe(()=>{
    console.log(`
        Goal : ${store.getState().goal}
    `);
})

setInterval(()=>{
    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random()*100) 
    })
},250);


setTimeout(()=>{
    unsubsribeGoalLogger();
},3000);