import React, { Component } from 'react'
import ChartistGraph from "react-chartist";
import {
    dataPie,
    dataSales,
    optionsSales,
    responsiveSales,
    dataBar,
    optionsBar,
    responsiveBar,
    table_data
  } from '../calendar/Variables.js';

import Card from '../common/Card';

  // var mapData = {
  //   AU: 760,
  //   BR: 550,
  //   CA: 120,
  //   DE: 1300,
  //   FR: 540,
  //   GB: 690,
  //   GE: 200,
  //   IN: 200,
  //   RO: 600,
  //   RU: 300,
  //   US: 2920
  // };

class Graph extends Component {

    createTableData() {
        var tableRows = [];
        for (var i = 0; i < table_data.length; i++) {
          tableRows.push(
            <tr key={i}>
              <td>
                <div className="flag">
                  <img src={table_data[i].flag} alt="us_flag" />
                </div>
              </td>
              <td>{table_data[i].country}</td>
              <td className="text-right">{table_data[i].count}</td>
              <td className="text-right">{table_data[i].percentage}</td>
            </tr>
          );
        }
        return tableRows;
    }
  render() {
    return (
      <div>              
        <div className="row">
            <div className="col-md-4">
              <Card
                graph
                title="Formations"
                category="Ratio Intra/Inter"
                content={<ChartistGraph data={dataPie} type="Pie" />}
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> Intra
                    <i className="fa fa-circle text-danger" /> Inter
                  </div>
                }
                stats={
                  <div>
                    <i className="fa fa-clock-o" /> Dernière mise à jour il y a 3 min.
                  </div>
                }
              />

            </div>
            <div className="col-md-8">
            <Card
                graph
                title="Formations à venir"
                category="Dans les prochains mois"
                content={
                  <ChartistGraph
                    data={dataSales}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                  />
                }
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> Intra
                    <i className="fa fa-circle text-danger" /> Inter
                  </div>
                }
                stats={
                  <div>
                    <i className="fa fa-history" /> Dernière mise à jour il y a 3 min.
                  </div>
                }
              />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <Card
              graph
                title="A planifier"
                category="Les formations à planifier"
                content={
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                }
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> Intra
                    <i className="fa fa-circle text-danger" /> Inter
                  </div>
                }
                stats={
                  <div>
                    <i className="fa fa-check" /> Dernière mise à jour il y a 3 min.
                  </div>
                }
              />
            </div>
            <div className="col-md-6">
                <div className="card  card-tasks">
                    <div className="card-header ">
                        <h4 className="card-title">Tasks</h4>
                        <p className="card-category">Backend development</p>
                    </div>
                    <div className="card-body ">
                        <div className="table-full-width">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" value="" disabled />
                                                    <span className="form-check-sign"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>Planifier les prochaines fromations</td>
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
                            <i className="now-ui-icons loader_refresh spin"></i> Dernière mise à jour il y a 3 min.
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Graph;
