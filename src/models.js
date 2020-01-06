import { action, thunk } from "easy-peasy";

export default {
  allitems: [],
  items: {"records":[]},
  isLoading: false,
  // Thunks
  fetchItems: thunk(async actions => {
    actions.setLoading(true);
    const res = await fetch(
      "https://api.airtable.com/v0/appHkUfrydZC57rUf/tablepwa?maxRecords=1000&view=Grid%20view"
      , {
        headers: {
          "Authorization": "Bearer keyDjaUZF1m1ecYee"
        }
      }
    );
    const items = await res.json();
    actions.setLoading(false);
    actions.setItems(items);
    actions.resetItems();
  }),
  // Actions
  setLoading: action((state,flag) => {
    state.isLoading = flag;
  }),
  resetItems: action((state) => {
    state.items = state.allitems;
  }),
  setItems: action((state, items) => {
    state.items = items;
    state.allitems = items;
  }),
  searchText: action((state, text) => {
    let upperText = text.toUpperCase();
    state.items.records = state.items.records.filter(
        item => 
        (
          (item.fields.title.toUpperCase().indexOf(upperText) > -1)
          ||
          (item.fields.field.toUpperCase().indexOf(upperText) > -1)
        )
    )    
  })

  /*
  ,
    add: action((state, item) => {
    state.items = [...state.items, item];
    state.allitems = [...state.allitems, item];
  }),
  remove: action((state, id) => {
    state.items = state.items.filter(item => item.id !== id);
  })
  */

};
