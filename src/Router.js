import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        titleStyle={{ flex: 1, textAlign: 'center' }}
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        component={EmployeeList}
                        title="Employees"
                        titleStyle={{ flex: 1, textAlign: 'center' }}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                        titleStyle={{ flex: 1, textAlign: 'center' }}
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                        titleStyle={{ flex: 1, textAlign: 'center' }}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;