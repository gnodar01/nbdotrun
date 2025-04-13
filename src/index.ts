import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the nbdotrun extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nbdotrun:plugin',
  description: 'A JupyterLab extension that will listen for code cell changes and run if ending in dot (`.`).',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbdotrun is activated!');
  }
};

export default plugin;
