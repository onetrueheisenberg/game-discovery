import { useState } from "react";
import { Alert } from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const items1 = ["james", "bond", "bames", "jond"];
  const items2 = ["bond", "bames"];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      {/* <ListGroup
        items={items1}
        title={"james"}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items2}
        title={"bodnds "}
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <p>World</p>
        </Alert>
      )}
      <Button
        children="Click Me"
        color="success"
        onClick={() => setAlertVisible(!alertVisible)}
      />
    </div>
  );
};

export default App;
