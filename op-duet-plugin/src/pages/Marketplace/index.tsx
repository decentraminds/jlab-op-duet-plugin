import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

// import Button from '@material-ui/core/Button';
// import AnimatedNumber from 'react-animated-number';


// function getRandomInt(max: number) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

/**
 * React component for Duet Dashboard.
 *
 * @returns The React component
 */
const MarketplaceComponent = (props: {animate_: boolean}): JSX.Element => {
  // const [counter, setCounter] = useState(0);
  // const [increment, setIncrement] = useState(0);
  const [animate, ] = useState(false);

  // const doIncrement = () => {
  //   const increment = getRandomInt(10000);
  //   setIncrement(increment);
  //   setCounter(counter + increment);
  // }
  // setAnimate(animate_)
  console.log(animate)

  return (
    <div style={{position: "absolute", top: 0, right: 0, bottom:0, left: 0}}>
        <iframe src="https://market.oceanprotocol.com/"
        title="Ocean Marketplace" height="100%" width="100%"></iframe>
    </div>
  );
};

/**
 * A Lumino Widget that wraps a CounterComponent.
 */
class MarketplaceWidget extends ReactWidget {
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
    return <MarketplaceComponent 
      animate_={this.animate}
      />;
  }
}

export default MarketplaceWidget;
