import React, { useEffect } from 'react'
import './App.css';
// import TopNav from './components/MainBody/TopNav';
// import Card from './components/Card/Card';
import Body from './components/MainBody/Body';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/MainBody/Loading';
import Header from './components/MainBody/Header';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <Header/>
      <hr style={{marginTop : "10px"}} />
      <Body/>
    </div>
  ) : <Loading/>
}

export default App