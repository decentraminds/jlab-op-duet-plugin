import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import { Jutsu } from 'react-jutsu';

declare var window: any;

/**
 * React component for Duet Dashboard.
 *
 * @returns The React component
 */
const DuetComponent = (props: {animate: boolean}): JSX.Element => {
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [call, setCall] = useState(false)

    const handleCallClick = (event: any) => {
        event.preventDefault()
        if (room && name) setCall(true)
    }


  return (
    <div>
        <h3>Duet Component</h3>
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

    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://meet.jit.si/external_api.js';
    window.document.body.appendChild(script);
  }
  protected render(): JSX.Element {
    return <DuetComponent 
      animate={this.animate}
      />;
  }
}

export default DuetWidget;
