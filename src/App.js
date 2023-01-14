import Header from "./components/Header/Header";
import LeftSection from "./components/LeftSection";
import BottomSection from "./components/BottomSection";
import MainContent from "./components/MainContent";
import styled from 'styled-components';
import Form from './components/Form';

const Container = styled.div`
display: flex;
`

function App() {
  return (
    <>
      <Header />
      <Form />
      {/* <Container>
        <LeftSection />
        <MainContent />
      </Container>
      <BottomSection /> */}
    </>
  );
}

export default App;
