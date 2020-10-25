import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { MainAreaWidget } from '@jupyterlab/apputils';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import AssetsPage from "./components/pages/Assets";
import DuetPage from "./components/pages/Duet";
import MarketplacePage from "./components/pages/Marketplace";

/**
 * The command IDs used by the extension.
 */
namespace CommandIDs {
  export const duet = 'op-assets';
  export const assets = 'op-duet';
  export const marketplace = 'op-marketplace';
}

/**
 * Initialization data for the op-duet-plugin extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'op-duet-plugin',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu) => {

    console.log('JupyterLab extension op-duet-plugin is activated!');

    const { commands, shell } = app;
      const quirkshopMenu = new Menu({ commands });  
      quirkshopMenu.title.label = 'OP Widget';
      mainMenu.addMenu(quirkshopMenu, { rank: 80 });

      // Duet.
      commands.addCommand(CommandIDs.duet, {
        label: 'Create a Duet',
        caption: 'Create a Duet in a Tab',
        execute: () => {
          const content = new DuetPage(true);
          const widget = new MainAreaWidget<DuetPage>({ content });
          widget.title.label = 'OP Duet';
          shell.add(widget, 'main');
        }
      });
      palette.addItem({ command: CommandIDs.duet, category: 'OP Plugin' });
      quirkshopMenu.addItem({ command: CommandIDs.duet });

      // Assets.
      commands.addCommand(CommandIDs.assets, {
        label: 'View Assets',
        caption: 'View Assets in a Tab',
        execute: () => {
          const content = new AssetsPage(true);
          const widget = new MainAreaWidget<AssetsPage>({ content });
          widget.title.label = 'OP Assets';
          shell.add(widget, 'main');
        }
      });
      palette.addItem({ command: CommandIDs.assets, category: 'OP Plugin' });
      quirkshopMenu.addItem({ command: CommandIDs.assets });

      // Marketplace.
      commands.addCommand(CommandIDs.marketplace, {
        label: 'Explore Marketplace',
        caption: 'Explore Marketplace in a Tab',
        execute: () => {
          const content = new MarketplacePage(true);
          const widget = new MainAreaWidget<MarketplacePage>({ content });
          widget.title.label = 'OP Marketplace';
          shell.add(widget, 'main');
        }
      });
      palette.addItem({ command: CommandIDs.marketplace, category: 'OP Plugin' });
      quirkshopMenu.addItem({ command: CommandIDs.marketplace });

  }
};

export default extension;
