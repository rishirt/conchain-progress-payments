import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(
											CampaignFactory.interface),
											'0x472b2e3fc563fdec41f90160a859bf63d63b3402'
);

export default instance ;