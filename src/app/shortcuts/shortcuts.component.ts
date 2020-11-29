import { Component, OnInit } from '@angular/core';
import { ShortcutsService } from './shortcuts.service';

export class ShortcutRow {
  shift: boolean = false;
  ctrl: boolean = false;
  opt: boolean = false;
  cmd: boolean = false;
  otherKeys: string = null;
  description: string = null;
}

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {

  displayedColumns: string[] = [
    'shift', 'ctrl', 'opt', 'cmd',
    'otherKeys', 'description'
  ];

  controlKeys: string[] = ['shift', 'ctrl', 'opt', 'cmd'];

  datasource: ShortcutRow[];
  shortcutTypes: string[] = [];
  activeShortcut: string = null;


  shortcuts: any[] = [];

  buttonStyles: any[] = [];

  btnColorGetter = (function* fetching() {
    const btnColors = [
      'primary', 'secondary', 'success',
      'danger', 'warning', 'info', 'dark'
    ];
    while (true) {
      yield* btnColors;
    }
  })();

  constructor(private shortcutsService: ShortcutsService) {

  }

  ngOnInit(): void {
    this.shortcutsService
      .getShortcuts()
      .then(shortcuts => {

        this.shortcuts = shortcuts;
        this.activeShortcut = this.shortcuts[0]["shortcutFor"];

        this.shortcuts.forEach(data => {
          const type = data['shortcutFor'];
          this.shortcutTypes.push(type);

          const nextBtnColor = this.btnColorGetter.next().value;
          // const classes = ['btn', 'btn-sm', 'btn-outline-' + nextBtnColor, 'btn-custom'];
          const classes = ['btn', 'btn-sm', 'btn-light', 'btn-custom'];
          this.buttonStyles.push({ type, classes });
        });


        this.refreshDatasource();
      }).catch(err => {
        console.log(err);
      });
  }



  isShortcutActive(shortcut: string) {
    return shortcut === this.activeShortcut;
  }

  changeActiveShortcut(shortcut: string) {
    this.activeShortcut = shortcut;
    this.refreshDatasource();
  }

  refreshDatasource() {

    this.datasource = [];

    let shortcutData: any;

    for (let shortcut of this.shortcuts) {
      if (shortcut['shortcutFor'] === this.activeShortcut) {
        shortcutData = shortcut;
        break;
      }
    }


    shortcutData['key_combinations'].forEach(keyCombination => {
      const shortcutRow = new ShortcutRow();
      shortcutRow['description'] = keyCombination['description'];

      const keys: string[] = keyCombination['key_combination'];

      keys.slice(0, -1).forEach(controlKey => {
        shortcutRow[controlKey] = true;
      });

      shortcutRow['otherKeys'] = keys[keys.length - 1];

      this.datasource.push(shortcutRow);
    });
  }

  getIcon(type: string): string {
    return `assets/img/icons/shortcuts/${type}.png`;
  }

}
