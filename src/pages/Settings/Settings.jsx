import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as Styled from './components';
import { clearHistory } from '@/reducers/actionCreators/history';
import { toggleTheme } from '@/reducers/actionCreators/theme';
import { PageLayout } from '@/layouts';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
    };
  }

  render() {
    const {
      clearHistory,
      toggleTheme,
    } = this.props;

    return (
      <PageLayout>
        <Styled.Name>
          Settings
        </Styled.Name>

        <Styled.SwitchName>
          Switch theme
        </Styled.SwitchName>

        <Styled.Wrapper>
          <Styled.SelectionMenu onChange={({ target }) => toggleTheme(target.value)}>
            <Styled.Option value="light">
              Light theme
            </Styled.Option>

            <Styled.Option value="dark">
              Dark theme
            </Styled.Option>

          </Styled.SelectionMenu>

          <Styled.Button onClick={clearHistory}>
            Clear All History
          </Styled.Button>
        </Styled.Wrapper>
      </PageLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => dispatch(clearHistory()),
  toggleTheme: (value) => dispatch(toggleTheme(value)),
});

export default connect(null, mapDispatchToProps)(Settings);

Settings.propTypes = {
  prop: propTypes.func,
};
