import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toggle } from './Components/Styles/Toggle';
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from './Components/Styles/GlobalStyles';
import {getCurrentuser} from "../src/Redux/actions/userActions"
import { useDarkMode } from './Components/Styles/useDarkMode';
import styled, { ThemeProvider } from 'styled-components';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageTeacher from './Components/PageTeacher/PageTeacher';
import PageParent from './Components/PageParent/PageParent';
import Cours from './Components/Cours/Cours';
import Note from './Components/Note/Note';
import EditCours from './Components/EditCours/EditCours';
import PdfCour from './Components/PdfCour/PdfCour';
import AddCours from './Components/AddCours/AddCours';
import CoursParent from './Components/CoursParent/CoursParent';
import NoteParent from './Components/NoteParent/NoteParent';
import AddNote from './Components/AddNote/AddNote';
import ContactUs from './Components/ContactUs/ContactUs';
import AddChildren from './Components/AddChildren/AddChildren';
import PageAdmin from './Components/PageAdmin/PageAdmin';
import CoursG from './Components/CoursG/CoursG';
import NoteG from './Components/NoteG/NoteG';
import EnseignantG from './Components/EnseignantG/EnseignantG';
import ParentsG from './Components/ParentsG/ParentsG';
import PdfCourParent from './Components/PdfCourParent/PdfCourParent';
import ElevesG from './Components/ElevesG/ElevesG';
import EditCoursAdmin from './Components/EditCoursAdmin/EditCoursAdmin';
import PdfCourAdmin from './Components/PdfCourAdmin/PdfCour';
import EditNote from './Components/EditNote/EditNote';
import EditNoteG from './Components/EditNoteG/EditNoteG';
import PrivateRouteAdmin from './Components/Privates/PrivateRouteAdmin';
import PrivateRouteParent from './Components/Privates/PrivateRouteParent';
import PrivateRouteTeacher from './Components/Privates/PrivateRouteTeacher';
import Login from './Components/Login/Login';
import RegisterP from './Components/RegisterP/RegisterP';
import RegisterT from './Components/RegisterT/RegisterT';
import Profile from './Components/Profile.js/Profile';
import EditTeacher from './Components/EditTeacher/EditTeacher';
import ProfileParent from './Components/ProfileParent/ProfileParent';
import EditParent from './Components/EditParent/EditParent';

const Container = styled.div`
  max-width: 100%;
`;

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    
      dispatch(getCurrentuser())
    
  }, [dispatch])

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div>
    <ThemeProvider theme={themeMode}>
      <Container>
        <Navbar/>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
                  {/* Guest Route */}
         <Route path='/' element={<HomePage/>} />
         <Route path="/login" element={<Login/>}/>  
         <Route path="/AccountP" element={<RegisterP/>}/> 
         <Route path="/AccountT" element={<RegisterT/>}/>        
          <Route path='/contactUs' element={<ContactUs/>} />
                  {/* Admin Routes */}     
          <Route path="/pageAdmin" element={<PrivateRouteAdmin><PageAdmin/></PrivateRouteAdmin>}/>
          <Route path="/coursG" element={<PrivateRouteAdmin><CoursG/></PrivateRouteAdmin>}/>
          <Route path="/noteG" element={<PrivateRouteAdmin><NoteG/></PrivateRouteAdmin>}/>
          <Route path="/parentsG" element={<PrivateRouteAdmin><ParentsG/></PrivateRouteAdmin>}/>
          <Route path="/enseignantG" element={<PrivateRouteAdmin><EnseignantG/></PrivateRouteAdmin>}/>
          <Route path="/elevesG" element={<PrivateRouteAdmin><ElevesG/></PrivateRouteAdmin>}/>           
          <Route path="/editcoursG/:id" element={<PrivateRouteAdmin><EditCoursAdmin /></PrivateRouteAdmin>} />
          <Route path="/editnoteG/:id" element={<PrivateRouteAdmin><EditNoteG/></PrivateRouteAdmin>} />
          <Route path="/pdfAdmin/:id" element={<PrivateRouteAdmin><PdfCourAdmin/></PrivateRouteAdmin>} />
                  {/* Teacher Routes */}
          <Route path="/profile" element={<PrivateRouteTeacher><Profile/></PrivateRouteTeacher>}/>
          <Route path="/editteacher/:id" element={<PrivateRouteTeacher><EditTeacher/></PrivateRouteTeacher>}/>

          <Route path="/pageTeacher" element={<PrivateRouteTeacher><PageTeacher/></PrivateRouteTeacher>}/>
          <Route path="/cours" element={<PrivateRouteTeacher><Cours/></PrivateRouteTeacher>}/>
          <Route path="/AddCours" element={<PrivateRouteTeacher><AddCours/></PrivateRouteTeacher>}/>
          <Route path="/AddNote" element={<PrivateRouteTeacher><AddNote/></PrivateRouteTeacher>}/> 
          <Route path="/note" element={<PrivateRouteTeacher><Note/></PrivateRouteTeacher>}/>
          <Route path="/editcours/:id" element={<PrivateRouteTeacher><EditCours /></PrivateRouteTeacher>} />
          <Route path="/editnote/:id" element={<PrivateRouteTeacher><EditNote/></PrivateRouteTeacher>} />
          <Route path="/pdf/:id" element={<PrivateRouteTeacher><PdfCour/></PrivateRouteTeacher>} />
                  {/* parent Routes */}
            <Route path="/profileParent" element={<PrivateRouteParent><ProfileParent/></PrivateRouteParent>}/>
          <Route path="/editparent/:id" element={<PrivateRouteParent><EditParent/></PrivateRouteParent>}/>

           <Route path="/pageParent" element={<PrivateRouteParent><PageParent/></PrivateRouteParent>}/>
          <Route path="/coursParent" element={<PrivateRouteParent><CoursParent/></PrivateRouteParent>}/>
          <Route path="/noteParent" element={<PrivateRouteParent><NoteParent/></PrivateRouteParent>}/>
          <Route path="/addChlidren" element={<PrivateRouteParent><AddChildren/></PrivateRouteParent>}/>
           <Route path="/pdfParent/:id" element={<PrivateRouteParent><PdfCourParent/></PrivateRouteParent>} />

        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  </div>
  );
}

export default App;