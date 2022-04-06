import { getServer } from '.';

jest.mock("../features",()=>{
    const {rest} = jest.requireActual("msw");
    const mock_handler = rest.get("/mock",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.body(JSON.stringify({data:"test"}))
        )
    });
    
    const handlers = [mock_handler];

    return {
        mockFeature:{
            handlers: handlers
        }
    }
})

let server = getServer();

beforeAll(()=>server.listen())
afterAll(()=>server.close())

it(`loads handlers from the features module`,async()=>{
    let response = await fetch("/mock");
  
    let json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data).toBe("test")
})