import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from'./reducers';

describe('search robots', () => {
    const initalStateSearch = {
        searchField: ''
    }
    it('should return the inital state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })

    it('should handle the CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initalStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})

describe('request robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    it('should return the inital state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: {}
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 12,
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: 12,
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'errored'
        })).toEqual({
            robots: [],
            error: 'errored',
            isPending: false
        })
    })
      
})