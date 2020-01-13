import { action, thunk } from "easy-peasy";

export default {
  allitems: [],
  items: {"records":[]},
  isLoading: false,
  isModal: false,
  currentItem:{"id":"","title":"","field":"","value":""},
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
  addItem: thunk(async (actions,payload) => {

    if (payload.id !== ""){
      const res = await fetch(
        "https://api.airtable.com/v0/appHkUfrydZC57rUf/tablepwa",
        {
          method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
          //mode: 'cors', // no-cors, *cors, same-origin          
          headers: {
            "Authorization": "Bearer keyDjaUZF1m1ecYee",
            "Content-Type":"application/json"  
          },
          body:{
            "records":[
                {
                  "id":payload.id,
                  "fields":{
                    "title":payload.title,
                    "field":payload.field,
                    "value":payload.value
                  },
                  "typecast": true
                }
              ]
          }
        }
      );
      console.log('res',res);
      actions.setModal(false);
      //actions.fetchItems();
    }

  }),
  // Actions
  setLoading: action((state,flag) => {
    state.isLoading = flag;
  }),
  setModal: action((state,flag) => {
    state.isModal = flag;
  }),
  resetItems: action((state) => {
    state.items = state.allitems;
  }),
  setItem: action((state, item) => {
    console.log(item);
    state.currentItem = item;
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
