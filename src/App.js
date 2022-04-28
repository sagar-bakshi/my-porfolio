import { Route, Routes } from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import GlobalStyle from './components/globalStyles'
import Main from './components/Main';
import MySkillPage from './components/MySkillPage';
import {DarkTheme, lightTheme} from './components/Themes'
import WorkPage from './components/WorkPage';


function App() {
  return (
    <> 
      <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
       <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route index path="/blog" element={<BlogPage />} />
        <Route index path="/work" element={<WorkPage />} />
        <Route index path="/skills" element={<MySkillPage />} />
       </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;
