import React, { Fragment, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import Page from "./page";
import Search from "../search";
import Modal from "../modal";


const Main = () => {
  const isLoading = useStore(state => state.isLoading);
  const isModal = useStore(state => state.isModal);
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

  return (
    <Fragment>
        <div className="main" >
          <Search></Search>
          <Page items={items} isLoading={isLoading} ></Page>
        </div>
        <Modal isModal={isModal} ></Modal>
    </Fragment>
  );
};

export default Main;