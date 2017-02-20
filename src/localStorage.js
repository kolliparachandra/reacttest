const loadState=()=>{
try {
    let serializedState = localStorage.getItem('state');
    if(serializedState === null){
        return undefined;
    }
    return JSON.parse(serializedState);
} catch (error) {
    throw Error(`Error occured in getState ${error}`)
}
}

const saveState=(state)=>{
    try{
        let serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState)
    }
    catch(err){
        throw Error(`Error occured on save state ${err}`)
    }
}

export {loadState,saveState}