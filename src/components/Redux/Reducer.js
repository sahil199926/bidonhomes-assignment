
const initial= JSON.parse(localStorage.getItem('database')) ||{'sahil':{'name':'sahil','products':{}}}

const Reducer=(state=initial,action)=>{
    let updatedData
    switch (action.type){
        case 'signup':
            const rest=action.payload.rest;
            let Email={}
            Email[action.payload.email]=rest;
             updatedData={...state,...Email};
            localStorage.setItem('database',JSON.stringify(updatedData))
            return updatedData;

        case 'addProd':
            console.log(action.payload)
            const userName=action.payload.email;
            const id=action.payload.product_id;
            const product_info=action.payload.product_info;
            const data={};
            data[id]=product_info;
            updatedData={...state[userName],products:{...state[userName].products,...data}}
            state[userName]=updatedData
            localStorage.setItem('database',JSON.stringify(state))
            return state;

        default:

            return state;
            
    }


}
export default  Reducer;

