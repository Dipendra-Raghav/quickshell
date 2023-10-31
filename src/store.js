import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Actions/DataReducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;