import { connect } from 'react-redux'

import { saveReport } from '../actions'
import { getReports } from '../actions/getReports'

import ReportInterface from '../components/ReportInterface'


const mapStateToProps = (state, ownProps) => {
  return {
    config: state.newReportConfig,
    metricValues: state.metricValues,
    notes: state.notes,
    previousMetricValues: state.previousMetricValues,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    saveReport: () => dispatch(saveReport()),
    getReports: () => dispatch(getReports('reports')),
    }
}

const NewReport = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ReportInterface)

export default NewReport
