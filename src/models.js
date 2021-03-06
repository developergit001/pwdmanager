import { action, thunk } from "easy-peasy";

export default {
  allitems: [],
  items: {"records":[]},
  isLoading: false,
  isModal: false,
  hasError: false,
  currentItem:{"id":"","title":"","field":"","value":"","thumb":"","color":"","comment":""},
  // Thunks
  fetchItems: thunk(async actions => {
    try{

      actions.setLoading(true);
      const res = await fetch(
        "https://api.airtable.com/v0/xx/tablepwa?maxRecords=1000&view=Grid%20view"
        , {
          headers: {
            "Authorization": "Bearer xx"
          }
        }
      );
      const items = await res.json();
      actions.setLoading(false);
      actions.setItems(items);
      actions.resetItems();

    }catch(e){

      actions.setLoading(false);
      actions.setError(true);
    
    }
    
  }),
  addItem: thunk(async (actions,payload) => {
    let method = "POST";
    let obj = {
      "records":[
          {
            //"id":payload.id,
            "fields":{
              "title":payload.title,
              "field":payload.field,
              "value":payload.value,
              "comment":payload.comment,
              "thumb":payload.thumb,
              "color":payload.color
            }
          }
        ]
    };
    
    if (payload.id !== ""){
      obj.records[0]["id"] = payload.id;
      method = "PATCH";
    }

    try{
        await fetch("https://api.airtable.com/v0/xx/tablepwa",
          {
            method: method, // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin          
            headers: {
              "Authorization": "Bearer xx",
              "Content-Type":"application/json"  
            },
            body:JSON.stringify(obj)
          }
        );

      actions.setModal(false);
      actions.fetchItems();

    } catch(err){
      
      actions.setModal(false);
      actions.setError(true);

    }

  }),
  // Actions
  setLoading: action((state,flag) => {
    state.isLoading = flag;
  }),
  setModal: action((state,flag) => {
    state.isModal = flag;
  }),
  setError: action((state,flag) => {
    state.hasError = flag;
  }),
  resetItems: action((state) => {
    state.items = state.allitems;
  }),
  setItem: action((state, item) => {
    state.currentItem = item;
  }),
  setThumb: action((state, thumb) => {
    state.currentItem.thumb = thumb;
  }),
  setCurrentItem: action((state, currentItem) => {
    state.currentItem = currentItem;
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
