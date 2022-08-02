import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Buttons from './pages/Buttons';
import Colors from './pages/Colors';
import Grid from './pages/Grid';
import Home from './pages/Home';
import Inputs from './pages/Inputs';
import Spaces from './pages/Spaces';
import Typography from './pages/Typography';

function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/colors' element={<Colors />} />
          <Route path='/typography' element={<Typography />} />
          <Route path='/spaces' element={<Spaces />} />
          <Route path='/buttons' element={<Buttons />} />
          <Route path='/inputs' element={<Inputs />} />
          <Route path='/grid' element={<Grid />} />
        </Route>
      </Routes>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

export default App;
