export const AddProd=(email,product_id,product_info)=>{
    alert()
    console.log(email,product_id,product_info)
    return{type:'addProd',
            payload:{email,product_id,product_info}    
    }
}

export const  SignUp=(newEmail,newName)=>{
    
    return{type:'signup', payload:{"email":newEmail,rest:{"name":newName,'products':{}}}    
    }
}