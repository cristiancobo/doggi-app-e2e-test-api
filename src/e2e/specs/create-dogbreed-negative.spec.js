const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')
const {random } = require('faker');


let dogbreed = {}
describe('When user wants to dog breed  providing not allowed values',() => {
    describe('When name of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "height":40,
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[3,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When height of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[3,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When weight of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "lifeExpectancy":10,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[3,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When life expectancy of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[3,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });
    describe('When the colors of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedNatures" :[3,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the natures of dog breed is null',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedColors" :[1,2],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the nature of dog breed does not exist',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[9999,9999],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the color of dog breed does not exist',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "lifeExpectancy":10,
                "dogBreedColors" :[9999,9999],
                "dogBreedNatures" :[1,4],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the life expectancy is greater than 100  years old ',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":41,
                "lifeExpectancy":999,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[1,4],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the height is greater than 200  cms ',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":1000,
                "weight":41,
                "lifeExpectancy":45,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[1,4],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    describe('When the weight is greater than 200 kgs ',() => {

        it('Then should return a 400 Bad Request status code',async() => {
            dogbreed = {
                "name":"poodle",
                "height":40,
                "weight":1000,
                "lifeExpectancy":34,
                "dogBreedColors" :[1,2],
                "dogBreedNatures" :[1,4],
                "idCountry":1,
                "country":""
            }
            await axios.post(BASE_URL,dogbreed).catch(err => {
                expect(err.response.status).to.equal(400)
            });
        });

    });

    
  
    
});


