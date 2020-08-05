import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForms from './pages/TeacherForms';
import TeacherList from './pages/TeacherList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherForms} />
            <Route path="/give-classes" component={TeacherList} />
        </BrowserRouter>
    );
}

export default Routes;