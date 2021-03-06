import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, ListGroup, Spinner } from 'react-bootstrap';

import { apis, helper } from '../../../services';

import Trends from './Trends';

interface IFeedProps {
  themeInput: string;
  themeTextColor: string;
  themeMutedTextColor: string;
  themeBorder: string;
  themeSpinnerVariant: string;
  themeListItemBorderBottom: string;
  themePrimaryBackgroundColor: string;
  themeSecondaryBackgroundColor: string;
}

interface IFeedState {
  category: string;
  categories: Array<any>;
  source: string;
  sources: Array<any>;
  articles: Array<any>;
  loading: boolean;
}

class Feed extends Component<IFeedProps, IFeedState> {
  constructor(props: IFeedProps) {
    super(props);

    this.state = {
      loading: true,
      category: '',
      categories: [],
      source: '',
      sources: [],
      articles: []
    };

    this.getCategories = this.getCategories.bind(this);
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateSource = this.updateSource.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    await this.getSources();
    await this.getCategories();
    await this.getArticles();
  }

  async getCategories() {
    const { source } = this.state;
    const categories = await apis.getCategories(source);
    await this.setState({ categories });
  }

  async getSources() {
    const sources = await apis.getSources();
    await this.setState({ sources });
  }

  async updateCategory(event: any) {
    const { value: category } = event.target;
    this.setState({ category });
    await this.getArticles();
  }

  async updateSource(event: any) {
    const { value: source } = event.target;
    await this.setState({ source });
    await this.getCategories();
    await this.getArticles();
  }

  async getArticles() {
    const { category = '', source = '' } = this.state;
    await this.setState({ loading: true });
    const articles = await apis.getArticles(source, category);
    this.setState({ articles, loading: false });
  }

  renderForm() {
    const { categories = [], sources = [], source = '', category = '' } = this.state;
    const { themeInput } = this.props;
    return (
      <Form>
        <div className="row">
          {sources.length > 0 && (
            <div className="col-sm-6">
              <Form.Group>
                <Form.Control
                  as="select"
                  className={themeInput}
                  value={source}
                  onChange={this.updateSource}>
                  <option value={''}>Source</option>
                  {sources.map((source, index) => {
                    return (
                      <option key={index} value={source}>
                        {helper.capitalize(source)}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </div>
          )}
          {categories.length > 0 && (
            <div className="col-sm-6">
              <Form.Group>
                <Form.Control
                  as="select"
                  className={themeInput}
                  value={category}
                  onChange={this.updateCategory}>
                  <option value={''}>Category</option>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {helper.capitalize(category)}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </div>
          )}
        </div>
      </Form>
    );
  }

  renderArticles() {
    const { articles } = this.state;
    const {
      themePrimaryBackgroundColor = '',
      themeTextColor = '',
      themeSecondaryBackgroundColor = '',
      themeListItemBorderBottom = '',
      themeMutedTextColor = ''
    } = this.props;
    return (
      <div>
        {articles.length === 0 && (
          <div className="p-3 text-center text-uppercase rounded border">NO VIDEOS</div>
        )}
        {articles.length !== 0 && (
          <ListGroup>
            <ListGroup.Item
              className={`${themePrimaryBackgroundColor} ${themeListItemBorderBottom} text-white text-center`}>
              Articles ({articles.length})
            </ListGroup.Item>
            {articles.map((article = {}, index) => {
              const { title = '', url = '', source = '', publishedDate = '' } = article;
              let { description = '' } = article;
              console.log(description);
              description = description.toString() || '';
              const startIndex: number = description.indexOf('<img');
              const endIndex: number = description.indexOf('/>');
              let short = '';
              if (startIndex > -1 && endIndex > startIndex) {
                short = `${description.substring(0, startIndex)}${description.substring(
                  endIndex + 2,
                  description.length
                )}`;
              }
              return (
                <ListGroup.Item
                  key={index}
                  className={`${themeSecondaryBackgroundColor} ${themeListItemBorderBottom}`}>
                  <Card.Title>
                    <a href={url} target="_blank" rel="noreferrer" className={`${themeTextColor}`}>
                      <u>{title}</u>
                    </a>
                  </Card.Title>
                  <Card.Subtitle className={`${themeMutedTextColor} mb-1`}>
                    {source && <small>{source}</small>} -{' '}
                    {publishedDate && <small>({publishedDate})</small>}
                  </Card.Subtitle>
                  <Card.Text className={`${themeTextColor}`}>
                    <span dangerouslySetInnerHTML={{ __html: short }}></span>
                  </Card.Text>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </div>
    );
  }

  render() {
    const { loading = true } = this.state;
    const { themeSpinnerVariant = '' } = this.props;
    return (
      <div id="Feed" className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="mb-3">
              <Trends></Trends>
            </div>
          </div>
          <div className="col-sm-9">
            {this.renderForm()}
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
              </div>
            )}
            {!loading && this.renderArticles()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeListItemBorderBottom: string = _.get(state, 'theme.listItemBorderBottom', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  const themeSecondaryBackgroundColor: string = _.get(state, 'theme.secondaryBackgroundColor', '');
  const themeMutedTextColor: string = _.get(state, 'theme.mutedTextColor', '');
  return {
    themeInput,
    themeMutedTextColor,
    themeTextColor,
    themeBorder,
    themeListItemBorderBottom,
    themePrimaryBackgroundColor,
    themeSpinnerVariant,
    themeSecondaryBackgroundColor
  };
};

export default connect(mapStateToProps)(Feed);
