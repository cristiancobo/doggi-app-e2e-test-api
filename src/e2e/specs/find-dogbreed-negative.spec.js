const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')


let response;
let errorStatusExpected;
describe("When user wants find a dog breed by id that does not exist | FIND BY ID ", ()=>{
    before(async()=>{
        try {
            response=  await axios.get(BASE_URL+"/99999")
        } catch (error) {
            errorStatusExpected = error.response.status
        }
       
       
    });

    it("Then it should return BAD REQUEST 400 status", () =>{
        expect(errorStatusExpected).eql(400)
    
    });

});

