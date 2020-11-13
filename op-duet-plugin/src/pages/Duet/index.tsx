import { ReactWidget } from '@jupyterlab/apputils';
import React, { useState } from 'react';
import "antd/dist/antd.css";
import Button from '@material-ui/core/Button';

import { Jutsu } from 'react-jutsu';

import Web3 from "web3";
import Web3Modal, { IProviderOptions } from "web3modal";

import { Header } from "../../components/organisms";

const providerOptions: IProviderOptions = {

}

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

/**
 * React component for Duet Dashboard.
 *
 * @returns The React component
 */
const DuetComponent = (props: {animate: boolean}): JSX.Element => {
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [call, setCall] = useState(false)
    const [provider, setProvider] = useState(null as any)

    const handleCallClick = (event: any) => {
        event.preventDefault()
        if (room && name) setCall(true)
    }

    const connectWallet = async (event: any) => {
        let newProvider = await web3Modal.connect();
        console.log('web3 ==> ', new Web3(newProvider))
        setProvider(newProvider);
        newProvider.on("connect", (info: { chainId: number }) => {
            console.log("onConnect", provider, info);
        });
    }


  return (
    
    <div>
      {false ? (<div>
      <Header />
      <h3>Duet Component</h3>
      <div>
          <Button 
              variant="contained" 
              color="default" 
              onClick={connectWallet}
          >
          Connect Wallet
          </Button>
      </div>
      {call ? (
          <Jutsu
              roomName={room}
              userName={name}
              loadingComponent={<p>loading ...</p>} />
      ) : (
          <form>
              <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
              <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <Button onClick={handleCallClick} type='submit'>
                  Start Call / Join
              </Button>
          </form>
      )}
    </div>):(
      <div style={{position: "absolute", top: 0, right: 0, bottom:0, left: 0}}>
        <iframe src="http://192.168.100.2:3000/"
        title="Dueth" height="100%" width="100%"></iframe>
      </div>
    )}
    </div>
  );
};

/**
 * A Lumino Widget that wraps a CounterComponent.
 */
class DuetWidget extends ReactWidget {
  private animate: boolean;
  /**
   * Constructs a new CounterWidget.
   */
  constructor(animate: boolean) {
    super();
    this.addClass('jp-React');
    this.animate = animate;
  }
  protected render(): JSX.Element {
    return <DuetComponent 
      animate={this.animate}
      />;
  }
}

export default DuetWidget;
