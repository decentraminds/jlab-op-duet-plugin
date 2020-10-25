import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the op-duet-plugin extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'op-duet-plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension op-duet-plugin is activated!');
  }
};

export default extension;
