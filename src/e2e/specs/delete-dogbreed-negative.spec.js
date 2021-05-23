
const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../utils/const')
const {random } = require('faker');

describe('When user wants to delete a dog breed without providing id',() => {

    it('Then should return a 405 Method Not Allowed status code',async () => {
        await axios.delete(BASE_URL+"/").catch(err => {
            expect(err.response.status).to.equal(405)
        });
    });

});

describe('When user wants to delete a dog breed with id that does not exist',() => {

    it('Then should return a 400 status code',async () => {
        await axios.delete(BASE_URL+"/9999").catch(err => {
            expect(err.response.status).to.equal(400)
        });
    });

});