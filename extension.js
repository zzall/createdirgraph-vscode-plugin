const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
var ncp2 = require('node-clipboardy');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "createdirgraph-vscode-plugin" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    'generateDirGraph',
    function (source, name2, name3) {
      const { path: fsPath } = source || {};
      try {
        if (fsPath) {
          let dirstr = '├── ';
          let linkDirStr = '│   ';
          let blankDirStr = '    ';
          let lastDirStr = '└── ';
          let allDirStr = ``;

          const config = vscode.workspace.getConfiguration('generateDirGraph');
          const ignoreFiles = config.get('ignoreFiles');
          const recursionDepth = config.get('recursionDepth');

          const traverse = (dirname, level = 1) => {
            const dirs = fs.readdirSync(dirname);
            dirs.forEach((item, index) => {
              if (ignoreFiles.includes(item)) return;
              const itemStat = fs.statSync(path.join(dirname, item));
              const _dirstr = index === dirs.length - 1 ? lastDirStr : dirstr;
              const currentDirStr = `${linkDirStr.repeat(
                level > 1 ? 1 : 0
              )}${blankDirStr.repeat(
                Math.max(0, level - 2)
              )}${_dirstr}${item}\n`;

              if (itemStat.isDirectory()) {
                allDirStr += currentDirStr;
                if (recursionDepth) {
                  if (level <= Math.max(1, recursionDepth) - 1) {
                    traverse(path.resolve(dirname, item), level + 1);
                  }
                } else {
                  traverse(path.resolve(dirname, item), level + 1);
                }
              } else {
                allDirStr += currentDirStr;
              }
            });
          };
          traverse(fsPath);
          ncp2.writeSync(allDirStr);
          vscode.window.showInformationMessage(
            '生成目录结构图成功，可直接粘贴查看!'
          );
        } else {
          vscode.window.showErrorMessage('请选择文件目录');
        }
      } catch (error) {
        vscode.window.showInformationMessage(
          '如果出现错误，可以提交问题到https://github.com/zzall/createdirgraph-vscode-plugin/issues，作者随时关注！!'
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
