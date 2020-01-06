import React, { Fragment } from 'react';
import List from '../list';

function Page(props) {
    const items = props.items;  
    const isLoading = props.isLoading;
    return (
        <Fragment>
            <List items={items} isLoading={isLoading} ></List>
        </Fragment>
    );
}

export default Page;
