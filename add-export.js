import fs from 'fs';
import ts from 'typescript';

const filePath = 'dist/lib/index.d.ts'; // 要修改的文件路径

const content = fs.readFileSync(filePath, 'utf-8');
const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

const printer = ts.createPrinter();
let modifiedContent = '';
ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) {
        // 检查node是否含有导出修饰符
        const hasExportModifier = node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword);
        // 如果没有导出修饰符，则添加之
        if (!hasExportModifier) {
            const modifiers = [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)]; // 创建一个导出修饰符数组
            let exportedNode;
            if (ts.isInterfaceDeclaration(node)) {
                exportedNode = ts.factory.updateInterfaceDeclaration(
                    node,
                    modifiers,
                    node.name,
                    node.typeParameters,
                    node.heritageClauses,
                    node.members
                );
            } else if (ts.isTypeAliasDeclaration(node)) {
                exportedNode = ts.factory.updateTypeAliasDeclaration(
                    node,
                    modifiers,
                    node.name,
                    node.typeParameters,
                    node.type
                );
            }
            modifiedContent += printer.printNode(ts.EmitHint.Unspecified, exportedNode, sourceFile) + '\n';
        } else {
            // 如果已经导出，直接打印出来
            modifiedContent += printer.printNode(ts.EmitHint.Unspecified, node, sourceFile) + '\n';
        }
    } else {
        // 对于非接口和非类型别名声明的节点，直接打印出来
        modifiedContent += printer.printNode(ts.EmitHint.Unspecified, node, sourceFile) + '\n';
    }
});

fs.writeFileSync(filePath, modifiedContent, 'utf-8');
