import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Calendar extends Component {
  render() {
    return (
      <div id="Calendar">
        <main className="container mt-3">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Calendar</Card.Title>
            </Card.Body>
          </Card>
        </main>
      </div>
    );
  }
}

export default Calendar;
