export const AddProd=({email,product_id,product_info})=>{
    return{type:'addProd',
            payload:{email,product_id,product_info}    
    }
}

export const  SignUp=(newEmail,newName)=>{
    alert(newEmail)
    return{type:'signup', payload:{"email":newEmail,rest:{"name":newName,'products':{}}}    
    }
}