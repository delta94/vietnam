import React, { Component } from 'react';
import Swipeable from 'react-swipy';

const wrapperStyles = { position: 'relative', width: '250px', height: '250px' };
const actionsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 12
};

class Uong extends Component {
  constructor() {
    super();
    this.state = { cards: ['First', 'Second', 'Third'] };
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.setState(({ cards }) => ({
      cards: cards.slice(1, cards.length)
    }));
  }

  render() {
    const { cards = [] } = this.state;
    return (
      <div id="Uong">
        {cards.length > 0 ? (
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right }) => (
                <div style={actionsStyles}>
                  <button onClick={right}>Next</button>
                </div>
              )}
              onAfterSwipe={this.remove}>
              <div>{cards[0]}</div>
            </Swipeable>
            {cards.length > 1 && <div zIndex={-1}>{cards[1]}</div>}
          </div>
        ) : (
          <div>No more cards</div>
        )}
      </div>
    );
  }
}

export default Uong;
