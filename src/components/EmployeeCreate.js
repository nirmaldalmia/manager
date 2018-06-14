import React, { Component } from 'react';
import { Input, Card, CardSection, Button } from './common';

export default class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="John"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="9999999999"
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button> Create </Button>
                </CardSection>
            </Card>
        )
    }
}