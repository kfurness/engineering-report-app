import {
  metricNames,
  initMetricState,
  getUnchangedState,
  metricValues,
  notes,
  newReportConfig,
  previousMetricValues,
  reports,
  queued,
      } from './index.js'

const action = {
    type: 'TEST_REDUCER'
  }

let state = {}

test('inital metric state is an object', () => {
  expect(typeof(initMetricState)).toBe('object')
})

describe('metricValues() ', () => {

  test('should return an object', () => {
    expect(typeof(metricValues({}, action))).toBe('object')
  })

  test('should return initMetricState given initial empty inputs', () => {
    expect(metricValues(undefined, action)).toBe(initMetricState)
  })

  test('should return a state with an object composed of components of the action', () => {

    let action = {
      type: 'CHANGE_METRIC_VAL',
      id: 1,
      val: 1,
      name: 'name',
    }

    let oldState = {
      0: {
        name: 'stuff',
        val: 6,
      },
      1: {
        name: 'name',
        val: 9,
      }
    }

    let newState = {
      0: {
        name: 'stuff',
        val: 6,
      },
      1: {
        name: 'name',
        val: 1, //changed
      }
    }

    expect(metricValues(oldState, action)).toEqual(newState)
  })
})

describe('notes() ', () => {

  test('should return a empty string by default', () => {
    expect(notes(undefined, 'TEST')).toBe('')
  })

  test('should return a string provided by the action', () => {
    let action = {
      type: 'SAVE_REPORT_NOTES',
      string: 'This is a test of the notes() reducer function'
    }
    expect(notes(undefined, action)).toBe(action.string)
  })
})

describe('newReportConfig() ', () => {

  test('should return an object', () => {
    expect(typeof(newReportConfig(undefined, 'TEST'))).toBe('object')
  })

  test ('should return an object with model, short name, config number, and ballast when given a action type of "SET_NEW_REPORT_CONFIG"', () => {
    let action = {
      type: 'SET_NEW_REPORT_CONFIG',
      model: 'string',
      shortName: 'string',
      configNum: 1,
      ballast: false,
    }
    let output = {
      model: 'string',
      shortName: 'string',
      configNum: 1,
      ballast: false,
    }
    expect(newReportConfig({}, action)).toEqual(output)
  })
})

describe('previousMetricValues() ', () => {

  test('should return an object (which is actually an array)', () => {
    expect(typeof(previousMetricValues(undefined, 'TEST'))).toBe('object')
  })

  test('should return an empty array by default', () => {
    expect(previousMetricValues(undefined, 'TEST').length).toBe(0)
  })
})

describe('reports() ', () => {

  test('should return an object by default', () => {
    expect(typeof(reports(undefined, 'test'))).toBe('object')
  })

  test('should return a status of "requested" given an action type of "REPORTS_REQUESTED"', () => {

    const action = { type: 'REPORTS_REQUESTED' }

    expect(reports(undefined, action).status).toBe('requested')
  })

  test('should return a status of "received" given an action type of "REPORTS_RECEIVED"', () => {

    const action = { type: 'REPORTS_RECEIVED' }

    expect(reports(undefined, action).status).toBe('received')
  })

  test('should return reports passed in as a parameter an action type of "REPORTS_RECEIVED"', () => {

    const action = {
      type: 'REPORTS_RECEIVED',
      reports: ['test'],
    }

    expect(reports(undefined, action).reports).toEqual(['test'])
  })

  test('should return an error passed in as a parameter an action type of "REPORT_ERRORED"', () => {

    const action = {
      type: 'REPORTS_ERRORED',
      error: 'test error',
    }

    expect(reports(undefined, action).error).toEqual(
    'test error')
  })

  test('should return an status of "erroed" passed when passed an action type of "REPORTS_ERRORED"', () => {

    const action = {
      type: 'REPORTS_ERRORED',
      error: 'test error',
    }

    expect(reports(undefined, action).status).toEqual(
    'errored')
  })

})

describe('queued() ', () => {

  test('should return an array by default', () => {
    expect(queued(undefined, action)).toEqual([])
  })

  test('should return an array that includes a report value passed in when passing a type of "QUEUE_REPORT"', () => {
    const action = {
      type: 'QUEUE_REPORT',
      report: 12345,
    }
    expect(queued(undefined, action)).toEqual(expect.arrayContaining([ 12345 ]))
  })

  test('should return an array with a report corresponding to an index removed when passing a type of "UNQUEUE_REPORT"', () => {
    const action = {
      type: 'UNQUEUE_REPORT',
      index: 1,
    }
    const state = [123, 456]
    const result = [123]
    expect(queued(state, action)).toEqual(result)
  })

  test('should return an empty array when passed a type of "CLEAR_QUEUE"', () => {
    const action = {
      type: 'CLEAR_QUEUE',
    }
    const state = [123, 345]
    expect(queued(state, action)).toEqual([])
  })
})
