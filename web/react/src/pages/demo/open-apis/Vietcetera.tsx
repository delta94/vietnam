import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Card, ListGroup, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IVietceteraProps {
  themeTextColor: string;
  themeSpinnerVariant: string;
  themeListItemBorderBottom: string;
  themeSecondaryBackgroundColor: string;
  themeMutedTextColor: string;
}

interface IVietceteraState {
  articles: Array<any>;
  loading: boolean;
  type: string;
}

class Vietcetera extends Component<IVietceteraProps, IVietceteraState> {
  constructor(props: IVietceteraProps) {
    super(props);

    this.state = { articles: [], loading: false, type: '' };

    this.getArticles = this.getArticles.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    const type = 'latest';
    await this.setState({ loading: true });
    const articles = await apis.getVietceteraArticles(type);
    await this.setState({ articles, loading: false });
  }

  async getArticles(event: any) {
    const { value: type = '' } = event.target;
    await this.setState({ loading: true });
    const articles = await apis.getVietceteraArticles(type);
    await this.setState({ articles, loading: false });
  }

  renderForm() {
    const options = [
      { value: 'latest', text: 'Latest' },
      { value: 'popular', text: 'Popular' },
      { value: 'editor-pick', text: 'Editor Pick' }
    ];
    return (
      <Form>
        <Form.Group>
          <Form.Control as="select" value={this.state.type} onChange={this.getArticles}>
            {options.map((option, index) => {
              const { text, value } = option;
              return (
                <option key={index} value={value}>
                  {text}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  render() {
    const { articles = [], loading } = this.state;
    const {
      themeTextColor = '',
      themeSpinnerVariant = '',
      themeListItemBorderBottom = '',
      themeSecondaryBackgroundColor = '',
      themeMutedTextColor = ''
    } = this.props;
    return (
      <div id="Vietcetera" className="container-fluid">
        <div className="text-center mb-3">
          <a href={`https://www.npmjs.com/package/vietcetera`} rel="noreferrer" target="_blank">
            npm
          </a>
        </div>
        <h3 className={`${themeTextColor} text-center`}>Vietcetera ({articles.length})</h3>
        {this.renderForm()}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && articles.length !== 0 && (
          <Card className="h-55vh overflow-auto">
            <ListGroup className="list-group-flush">
              {articles.map((article, index) => {
                const { title = '', url = '', publishDate = '', description = '' } = article;
                return (
                  <ListGroup.Item
                    key={index}
                    className={`${themeSecondaryBackgroundColor} ${themeListItemBorderBottom}`}>
                    <Card.Title>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${themeTextColor}`}>
                        {title}
                      </a>
                    </Card.Title>
                    <Card.Subtitle className={`${themeMutedTextColor} mb-1`}>
                      <small>{publishDate}</small>
                    </Card.Subtitle>
                    <Card.Text className={themeTextColor}>{description}</Card.Text>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themeListItemBorderBottom: string = _.get(state, 'theme.listItemBorderBottom', '');
  const themeSecondaryBackgroundColor: string = _.get(state, 'theme.secondaryBackgroundColor', '');
  const themeMutedTextColor: string = _.get(state, 'theme.mutedTextColor', '');
  return {
    themeTextColor,
    themeSpinnerVariant,
    themeListItemBorderBottom,
    themeSecondaryBackgroundColor,
    themeMutedTextColor
  };
};

export default connect(mapStateToProps)(Vietcetera);
