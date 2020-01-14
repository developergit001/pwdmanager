import React, { Fragment, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import Page from "./page";
import Search from "../search";
import Modal from "../modal";


const Main = () => {
  const isLoading = useStore(state => state.isLoading);
  const isModal = useStore(state => state.isModal);
  const hasError = useStore(state => state.hasError);
  const items = useStore(state => state.items);
  const fetchItems = useActions(actions => actions.fetchItems);

  /*
    Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, 
    el Hook useEffect equivale a: 
    componentDidMount, componentDidUpdate y componentWillUnmount combinados.  
  */
  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  let componenteModal = null;

  if (isModal || hasError)
  componenteModal = (<Modal isModal={true} hasError={hasError} />);

  return (
    <Fragment>
        <div className="main" >
          <Search></Search>
          <Page items={items} isLoading={isLoading} ></Page>
        </div>
        {componenteModal}
    </Fragment>
  );
};

export default Main;