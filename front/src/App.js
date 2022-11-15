import {Button, Grid} from "@mui/material";
import FormElement from "./components/FormElement/FormElement";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createMailRequest} from "./store/actions/mailActions";

const App = () => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState({
    message: ""
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setMail(prev => ({...prev, [name]: value}));
  };

  const sendMessage = () => {
    dispatch(createMailRequest({...mail}));
  };

  return (
    <div style={{padding: "15px"}}>
      <Grid container spacing={2} sx={{width: "500px"}}>
        <FormElement
          type="text"
          required={true}
          label="Enter your message"
          name="message"
          value={mail.message}
          onChange={inputChangeHandler}
          multiline={true}
          rows={3}
        />

        <Grid item>
          <Button variant='contained' onClick={sendMessage}>Send mail</Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default App;
