import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Toast } from '../components/Toast';

storiesOf('Toast', module)
    .add('standard', scenario1)
    .add('long text', scenario2)
    .add('no action', scenario3)
    .add('delay of 30s', scenario4)
    .add('handlers', scenario5);

function scenario1() {
    return (
        <Toast text="Run Started" action="Open" />
    );
}

function scenario2() {
    const text = "Extremely long text, this message is excessively long," +
        " but we need to keep wrapping until we get ellipsis. " +
        " Just add a little more text and now we should be there.";
    return (
        <Toast text={text} action="Open" />
    );
}

function scenario3() {
    return (
        <Toast text="Run started" />
    );
}

function scenario4() {
    return (
        <Toast text="Run Started" action="Open" dismissDelay={30000} />
    );
}

function scenario5() {
    const actionHandler = () => {
        alert('action!');
    };

    const dismissHandler = () => {
        alert('dismiss');
    };

    return (
        <Toast text="Run Started" action="Open" dismissDelay={30000}
               onActionClick={actionHandler} onDismiss={dismissHandler} />
    );
}