import React, { Component } from 'react';
import moment from 'moment';

import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

var initialize_calendar;

initialize_calendar = function() {
  $('.calendar').each(function(){
    var calendar = $(this);
    calendar.fullCalendar({});
  })(jQuery)
};
$(document).on('turboLinks:load', initialize_calendar)(jQuery);

class CalPage extends React.Component {
  render() {
    return (
      <div class="calendar"></div>
    );
  }
}


export default CalPage;