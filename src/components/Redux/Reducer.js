
const initial= JSON.parse(localStorage.getItem('database')) ||{'sahil':{'name':'sahil','products':{"1":{'name':'prduct1','description':"empty",price:200,'auantity':2,image:'url'}}}}

const Reducer=(state=initial,action)=>{
    switch (action.type){
        case 'signup':
            alert()
            const rest=action.payload.rest;
            let Email={}
            Email[action.payload.email]=rest;
            const updatedData={...state,...Email};
            localStorage.setItem('database',JSON.stringify(updatedData))
            return updatedData;

        case 'addProd':
            const userName=action.payload.email;
            const id=action.payload.product_id;
            const product_info=action.payload.product_info;
            return {...state,userName:{...state.userName,products:{...state.userName.products,id:product_info}}}
        default:
            return state;
            
    }


}
export default  Reducer;
// •	Name (Required)
// •	Description (Optional)
// •	Price (Required, Decimal)
// •	Quantity ( Required, Number)
// •	Image (Optional, user image url) 
