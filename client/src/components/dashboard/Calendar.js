import React, { Component } from 'react'

import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar.js';
import DbFooter from './common/DbFooter.js';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import '../../assets/jss/calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';



import { Row, Col } from "reactstrap";
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
// import moment from 'moment';
import * as moment from 'moment/moment';
import 'moment/locale/nb';
// import 'node_module/lib/localizers/moment';

// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

import Card from "./common/Card";

import { events } from './calendar/Variables';

const localizer = BigCalendar.momentLocalizer(moment);

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));



class Calendar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "rbc-event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <DbNavBar />


              <div className="main-content">
                {this.state.alert}
                <div className="container-fluid">
                  <Row>
                    <Col md={10} mdOffset={1}>
                      <Card
                        calendar
                        content={
                          <BigCalendar
                            localizer={localizer}
                            selectable
                            events={this.state.events}
                            defaultView="month"
                            scrollToTime={new Date(1970, 1, 1, 6)}
                            defaultDate={new Date()}
                            onSelectEvent={event => this.selectedEvent(event)}
                            onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                            eventPropGetter={this.eventColors}
                            culture="en-GB"
                          />
                        }
                      />
                    </Col>
                  </Row>
                </div>
              </div>



            <DbFooter />
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;