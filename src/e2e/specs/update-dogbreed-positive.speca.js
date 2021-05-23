const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')
const {random } = require('faker');

let response;
let response_update;

const dogbreed_test = {
    "name":`${random.words(2)}`,
    "height":41,
    "weight":34,
    "lifeExpectancy":23,
    "dogBreedColors" :[1,2],
    "dogBreedNatures" :[3,2,1],
    "idCountry":1,
    "country":""
 }
 const dogbreed_updated = {
    "name":`${random.words(2)}`,
    "height":45,
    "weight":49,
    "lifeExpectancy":23,
    "dogBreedColors" :[1,2,4],
    "dogBreedNatures" :[3,2,1],
    "idCountry":12,
    "country":""
}

describe("User creates a new dog breed", () => {

  before(async () => {
      response = await axios.post(BASE_URL, dogbreed_test);
      dogbreed_id= response.data.id;
    }); 

      it("Then it return status code CREATED 201", () =>{
          expect(response.status).eql(201)
        });
  
      it("Then it return application/json as content type", () => {
          expect(response.headers['content-type']).to.contain('application/json');
        });

        describe("When user wants update a dog breed by id | UPDATE ", () =>{

          before(async () => {
              response_update = await axios.put(`${BASE_URL}/${dogbreed_id}`, dogbreed_updated);
           });
     
     
           it("Then returns that the dog breed was updated with the new name", () =>{
             expect(response_update.data.name).eql(dogbreed_updated.name)
           
           });
     
           it("When returns that the dog breed was updated with the new height", () =>{
             expect(response_update.data.height).eql(dogbreed_updated.height)
           
           });

           it("When returns that the dog breed was updated with the new weight", () =>{
              expect(response_update.data.weight).eql(dogbreed_updated.weight)
            
            });

            it("When returns that the dog breed was updated with the new life expectancy", () =>{
              expect(response_update.data.lifeExpectancy).eql(dogbreed_updated.lifeExpectancy)
            
            });


           it("Then it return status code 200", () =>{
             expect(response_update.status).eql(200)
     
          });
     
           it("Then it return application/json as content type", () => {
               expect(response.headers['content-type']).to.contain('application/json');
           });

      });


});
