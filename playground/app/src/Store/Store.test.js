import store from '.';

jest.mock('../features', ()=>{
    const mockReducer = (state={},action)=>{
        if(action.type == "mockType"){
            return {
                ...state,
                testData:action.payload
            }
        }
        return state;
    }
    return {
        __esModule: true,
       reducers: {mockFeature:mockReducer}
    }
})

it(`creates the store with 
reducers from the features module`,async ()=>{
    let state = null;
    const testData = "test";

    state = store.getState();
    expect(Object.keys(state.mockFeature)).not.toContain('testData');

    store.dispatch({type:"mockType",payload:testData})

    state = store.getState();
    expect(Object.keys(state)).toContain('mockFeature');
    expect(Object.keys(state.mockFeature)).toContain('testData');
    expect(state.mockFeature.testData).toBe(testData)    
})