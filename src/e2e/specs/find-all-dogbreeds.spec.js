const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')

let response;
describe("When user wants list all dog breeds | FIND ALL", ()=>{
    before(async()=>{
        response=  await axios.get(BASE_URL)
    });

    it("Then it should return OK 200 status", () =>{
        expect(response.status).eql(200)
    
    });
    it("Then it should return that the list has more than zero elements", () =>{
        expect(response.data.length).to.be.greaterThan(0)
    });
    it("Then it must return that an element of the list contains all the attributes", () =>{
        const dogbreed_test  = response.data[0]
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

    it("Then it must return that an element of the list contains all the attributes and each attribute has the corresponding type", () =>{
        const dogbreed_test  = response.data[0]
        expect(dogbreed_test.name).to.be.a('string');
        expect(dogbreed_test.country).to.be.a('string');
        expect(dogbreed_test.weight).to.be.a('number');
        expect(dogbreed_test.height).to.be.a('number');
        expect(dogbreed_test.lifeExpectancy).to.be.a('number');
        expect(dogbreed_test.dogBreedNatures).to.be.a('array');
        expect(dogbreed_test.dogBreedColors).to.be.a('array');
    });

  

});