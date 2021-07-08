import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from '../header/Header';
import FormList from '../allNotesFormList/FormList';
import axios from 'axios';

const AllNotes = () => {
const history = useHistory();

return (
  <div>
    <Header>
      Приёмы
      <span className='extBtn'>
        <Button variant="contained">Выход</Button>
      </span>
    </Header>
    <FormList />
  </div>
)
}

export default AllNotes;