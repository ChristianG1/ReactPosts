import { useState } from "react";
import { ListPost } from "./components/ListPost";
import { MainHeader } from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader showModalHandler={showModalHandler} />
      <main>
        <ListPost
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
