import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaignsCount = await factory.methods.getChannelsCount().call();
    const campaigns = await Promise.all(
      Array(parseInt(campaignsCount))
        .fill()
        .map((element, index) => {
          return factory.methods.deployedCampaigns(index).call();
        })
    );
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((request,index) => {
      let owner = request.owner;
      let description = request.description;

      return {
         header: owner,
         description: (
           <div>
            <br></br>
            <h4>This channel is managed by the above address</h4>
            <h3>{`${description}`}</h3>
            <Link route={`/campaigns/${request.campaign}`}>
              <a>View Channel</a>
            </Link>
         </div>
        ),
        fluid: true
     }
   })
    return <Card.Group items={items} />;
}

  render() {
    return (
      <Layout>
        <div>
          <h2>Payment Channels in Progress</h2>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Payment Channel"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
