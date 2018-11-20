
import React, { Component } from 'react'

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TCCourses extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <DbNavBar />

            <div className="content">
              <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card card-tasks">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card-header ">
                          <h4 className="card-title">Mes coures</h4>
                          <p className="card-category">Ajouter, éditer ou supprimer un cours</p>
                        </div>
                      </div>
                      <div className="col-md-3 btn-group-vertical">
                        <button type="button" className="btn btn-info btn-fill pull-right">
                          Ajouter un cours
                        </button>
                      </div>
                    </div>
                    <div className="card-body ">
                      <div className="table-full-width">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <span className="form-check-sign"></span>
                                  </label>
                                </div>
                              </td>
                              <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept thr /ough metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" checked />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Read "Following makes Medium better"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" disabled />
                                      <span className="form-check-sign"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>Unfollow 5 enemies from twitter</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer ">
                        <hr />
                        <div className="stats">
                          <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <DbFooter />
          </div>
        </div>
      </div>
    )
  }
}

export default TCCourses;