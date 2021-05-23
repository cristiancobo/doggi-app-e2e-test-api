const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')
const {random } = require('faker');


let response;
const dogbreed = {
    "name":`The ${random.words(2)}`,
    "height":45,
    "weight":49,
    "lifeExpectancy":23,
    "dogBreedColors" :[1,2,4],
    "dogBreedNatures" :[3,2,1],
    "idCountry":1,
    "country":""
}

describe("User creates a new dog breed | SAVE  ", () => {

    before(async () => {
        response = await axios.post(BASE_URL, dogbreed);
        dogbreed_id = response.data.id;
    });

    describe("When the user wants to delete a dog breed | DELETE", () => {

        before(async () => {
            dogbreed_list = await axios.get(BASE_URL);
            response = await axios.delete(`${BASE_URL}/${dogbreed_id}`);
            dogbreed_list_current= await axios.get(BASE_URL);
        });

        it("Then it returns a response with code 200", () => {
            expect(response.status).eql(200);
         });

       it("Then the deleted dog breed should not be in the current list of dog breeds", () =>{
            const dogbreed_deleted = dogbreed_list_current.data.find(dog => dog.id === dogbreed_id);
            expect(dogbreed_deleted).eql(undefined);
        });

       it("The the list decreases by one", () => {
           expect(dogbreed_list_current.data.length).eql(dogbreed_list.data.length-1);
        });



    })



});

