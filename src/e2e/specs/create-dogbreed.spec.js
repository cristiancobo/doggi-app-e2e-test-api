const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')
const dogbreed = {

    "name":"poodle",
    "height":40,
    "weight":41,
    "lifeExpectancy":10,
    "dogBreedColors" :[1,2],
    "dogBreedNatures" :[3,2],
    "idCountry":1,
    "country":""
}

let response;
describe("When user wants create a new  dog breed | SAVE ", ()=>{
    before(async()=>{
        dogbreeds_list = await axios.get(BASE_URL);
        response=  await axios.post(BASE_URL,dogbreed);
        dogbreed_id = response.data.id;
        new_dogbreeds_list = await axios.get(BASE_URL);
    });

    after(async () => {
       await axios.delete(`${BASE_URL}/${dogbreed_id}`);
    });

    it("Then it must return that an element of the list contains all the attributes and each attribute has the corresponding type", () =>{
        const dogbreed_test  = response.data
        expect(dogbreed_test.name).to.be.a('string');
        expect(dogbreed_test.country).to.be.a('string');
        expect(dogbreed_test.weight).to.be.a('number');
        expect(dogbreed_test.height).to.be.a('number');
        expect(dogbreed_test.lifeExpectancy).to.be.a('number');
        expect(dogbreed_test.dogBreedNatures).to.be.a('array');
        expect(dogbreed_test.dogBreedColors).to.be.a('array');
    });

    it("Then it should return OK 200 status", () =>{
        expect(response.status).eql(200)
    
    });

    it("Then it must return that an element of the list contains all the attributes", () =>{
        const dogbreed_test  = response.data
        expect(dogbreed_test).to.have.property("name");
        expect(dogbreed_test).to.have.property("height");
        expect(dogbreed_test).to.have.property("weight");
        expect(dogbreed_test).to.have.property("lifeExpectancy");
        expect(dogbreed_test).to.have.property("country");
        expect(dogbreed_test).to.have.property("dogBreedColors");
        expect(dogbreed_test).to.have.property("dogBreedNatures");
        

    });

    it("Then it should return a JSON", () =>{
        expect(response.headers["content-type"]).to.contain("application/json")
    });

    it("Then it should increase the lenght list", () => {
   
        expect(new_dogbreeds_list.data.length).eql(dogbreeds_list.data.length +1);
     });



  

});