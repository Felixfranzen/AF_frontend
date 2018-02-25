import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmployee } from '../../core/employees/actions'
import Dropdown from '../../components/dropdown/index'
import Modal from 'react-modal'

const modalCss = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%'
  },
  content: {
    backgroundColor: '#3B73CC',
    border: 'none',
    width: '50%',
    height: '100px',
    minHeight: '100px',
    margin: '0 auto',
    boxShadow: '0 20px 40px 0 rgba(0,0,0,0.6)'
  }
}


class EmployeeItem extends Component {
  constructor(){
    super()
    this.state = {
      modalOpen: false,
      companyId: null
    }
  }

  save(){
    this.props.assignEmployee(this.props.employee, this.state.companyId)
    this.setState({ modalOpen: false, companyId: null })
  }

  setCompanyDropdown(){
    return this.props.companies.map((comp) => {
      return {
        name: comp.name,
        value: comp.id
      }
    })
  }

  render(){
    return (
      <div className="table-item">
        <div className="employee-list padded">
          <div className="employee-item">
            <p>{this.props.employee.name}
              <span className="clickable" onClick={() => { this.setState({ modalOpen: true })} }>
                <b>Assign</b>
              </span>
            </p>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          style={modalCss}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <h5 className="faded light">ASSIGN EMPLOYEE</h5>
          <Dropdown items={this.setCompanyDropdown()} onSelect={ (val) => this.setState({ companyId: val })} />
          <div className="button-group">
            <button onClick={() => { this.setState({ modalOpen: false })} }>CLOSE</button>
            <button onClick={ () => { this.save() }}>SAVE</button>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ companies }) => {
  return {
    companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignEmployee: (employee, company) => { dispatch(updateEmployee(employee.id, employee.name, company)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeItem)