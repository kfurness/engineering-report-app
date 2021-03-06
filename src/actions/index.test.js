import {
  changeMetricVal,
  saveReportNotes,
  setNewReportConfig,
  saveReport,
  requestReports,
  receiveReports,
  reportError,
  queueReport,
  unqueueReport,
  clearQueue,} from './index.js'

import {
  getReports,
        } from './getReports'

const metricValActionOutput = {
  id: 1,
  val: 'cheese',
  name: 'Cheesiness',
}

describe('changeMetricVal() ', () => {

  test('should return an object', () => {
    expect(typeof(changeMetricVal(metricValActionOutput))).toBe('object')
  })

  test ('action type should be "CHANGE_METRIC_VAL"', () => {
    expect(changeMetricVal(metricValActionOutput).type).toBe('CHANGE_METRIC_VAL')
  })
})

describe('saveReportNotes() ', () => {
  test('action type should be "SAVE_REPORT_NOTES"', () => {
    let output = ''
    expect(saveReportNotes(output).type).toBe('SAVE_REPORT_NOTES')
  })

  test('should return a string', () => {
    let output = 'This is a test string'
    expect(saveReportNotes(output).string).toBe(output)
  })
})

describe('setNewReportConfig() ', () => {

  test ('action type should be "SET_NEW_REPORT_CONFIG"', () => {
    let output = {}
    expect(setNewReportConfig(output).type).toBe('SET_NEW_REPORT_CONFIG')
  })

  test ('should return an object with model, shortName, configNum, and ballast', () => {
    let output = {
      type: 'SET_NEW_REPORT_CONFIG',
      model: 'string',
      shortName: 'string',
      configNum: 1,
      ballast: false,
    }
    let returnValues = Object.keys(output)
    expect(Object.keys(setNewReportConfig(output))).toEqual(returnValues)
  })
})

describe('saveReport() ', () => {

  test('should return an object', () => {
    expect(typeof(saveReport())).toBe('object')
  })

  test('should return an action type of "SAVE_REPORT_AND_RESET"', () => {
    expect(saveReport().type).toBe('SAVE_REPORT_AND_RESET')
  })
})

describe('requestReports() ', () => {

  test('should return an object', () => {
    expect(typeof(requestReports(undefined))).toBe('object')
  })

  test('should return an action type of "REPORTS_REQUESTED"', () => {
    expect(requestReports().type).toBe('REPORTS_REQUESTED')
  })

})

describe('receiveReports() ', () => {

  test('should return an object', () => {
    expect(typeof(receiveReports(undefined))).toBe('object')
  })

  test('should return an action type of "REPORTS_RECEIVED"', () => {
    expect(receiveReports().type).toBe('REPORTS_RECEIVED')
  })

  test('should return a report variable passed into it', () => {
    expect(receiveReports('test').reports).toBe('test')
  })

})

describe('reportError() ', () => {

  test('should return an object', () => {
    expect(typeof(reportError())).toBe('object')
  })

  test('should return an action type of "REPORTS_ERRORED"', () => {
    expect(reportError().type).toBe('REPORTS_ERRORED')
  })

  test('should return any error passed in as a parameter', () => {
    expect(reportError('test').error).toBe('test')
  })
})

describe( 'getReports() ', () => {

  test('should do something', () => {
    expect(typeof(getReports('reports'))).toBe('function')
  })
})

describe('queueReport() ', () => {

  test('should return an object', () => {
    expect(typeof(queueReport(undefined))).toBe('object')
  })

  test('should return an action type of "QUEUE_REPORT"', () => {
    expect(queueReport(undefined).type).toBe('QUEUE_REPORT')
  })

  test('should return a second property of "report"', () => {
    expect(Object.keys(queueReport(undefined))).toEqual(['type', 'report'])
  })
})

describe('unqueueReport() ', () => {

  test('should return an object', () => {
    expect(typeof(unqueueReport(undefined))).toBe('object')
  })

  test('should return an action type of "UNQUEUE_REPORT"', () => {
    expect(unqueueReport(undefined).type).toBe('UNQUEUE_REPORT')
  })

  test('should also return a second property of "index"', () => {
    expect(Object.keys(unqueueReport(undefined))).toEqual(['type', 'index'])
  })
})

describe('clearQueue() ', () => {

  test('should return an object', () => {
    expect(typeof(clearQueue())).toBe('object')
  })

  test('should return an action type of "CLEAR_QUEUE"', () => {
    expect(clearQueue().type).toBe('CLEAR_QUEUE')
  })
})
