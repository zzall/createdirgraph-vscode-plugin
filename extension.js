const vscode = require('vscode');
const path = require('path')
const fs = require('fs')
var ncp2 = require('node-clipboardy');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "createdirgraph-vscode-plugin" is now active!');

	let disposable = vscode.commands.registerCommand('getFileState', function (source, name2, name3) {
		const { path: fsPath } = source || {};

		if (fsPath) {
			let dirstr = '├── '
			let linkDirStr = '│   '
			let blankDirStr = '    '
			let lastDirStr = '└── '
			let allDirStr = ``

			const traverse = (dirname, level = 1) => {
				const dirs = fs.readdirSync(dirname)
				dirs.forEach((item, index) => {
					const itemStat = fs.statSync(path.join(dirname, item))
					const _dirstr = index === dirs.length - 1 ? lastDirStr : dirstr
					const currentDirStr = `${linkDirStr.repeat(level > 1 ? 1 : 0)}${blankDirStr.repeat(Math.max(0, level - 2))}${_dirstr}${item}\n`

					if (itemStat.isDirectory()) {
						allDirStr += currentDirStr
						traverse(path.resolve(dirname, item), level + 1)
					} else {
						allDirStr += currentDirStr
					}

				})
			}
			traverse(fsPath)
			ncp2.writeSync(allDirStr);
			vscode.window.showInformationMessage('生成目录结构图成功，可直接粘贴查看!');
		} else {
			vscode.window.showErrorMessage('请选择文件目录');
		}

	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
