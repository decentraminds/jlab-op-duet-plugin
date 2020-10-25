import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import AnimatedNumber from 'react-animated-number';


function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * React component for Duet Dashboard.
 *
 * @returns The React component
 */
const AssetsComponent = (props: {animate: boolean}): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);

  const doIncrement = () => {
    const increment = getRandomInt(10000);
    setIncrement(increment);
    setCounter(counter + increment);
  }

  return (
    <div>
        <h3>Assets Component</h3>
        <div>
            You earned{" "}
            <AnimatedNumber
            duration={increment / 10}
            stepPrecision={0}
            value={counter}
            />
        </div>
        <button
            onClick={() => { doIncrement() }}
        >
            Increment
        </button>
        <div>
            <Button 
            variant="contained" 
            color="default" 
            onClick={() => { doIncrement() }}
            >
            Increment
            </Button>
        </div>
    </div>
  );
};

/**
 * A Lumino Widget that wraps a CounterComponent.
 */
class AssetsWidget extends ReactWidget {
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
    return <AssetsComponent 
      animate={this.animate}
      />;
  }
}

export default AssetsWidget;
