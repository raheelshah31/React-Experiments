/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import AutoGrid from './AutoGrid'
import EnhancedTable from './EnhancedTable'
import Paper from 'material-ui/Paper';

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  root1: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class BasicTabsWrappedLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'one',
    };
  }
  handleChange (event, value) {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={this.handleChange.bind(this)}  indicatorColor="primary"
            textColor="primary">
            <Tab value="one" label="AUTO GRID" />
            <Tab value="two" label="TABLES" />
            <Tab value="three" label="CARDS" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer><AutoGrid/></TabContainer>}
        {value === 'two' && <TabContainer><EnhancedTable/></TabContainer>}
        {value === 'three' && <TabContainer><Paper className={classes.root1} elevation={4}/></TabContainer>}
      </div>
    );
  }
}

BasicTabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTabsWrappedLabel);
