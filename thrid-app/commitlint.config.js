module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "perf", // 优化相关，比如提升性能、体验
        "style", // 仅仅修改了空格、格式缩进、逗号等，不改变代码逻辑
        "docs", // 文档更新
        "test", // 增加测试
        "refactor", // 重构代码
        "build", // 构建相关
        "ci", // CI 配置
        "chore", // 其他修改，比如构建流程、依赖管理
        "revert", // 回滚到上一个版本
        "wip", // 开发中
        "workflow", // 工作流相关文件
        "types", // 类型定义文件更改
        "release" // 发布版本
      ]
    ]
  }
};
